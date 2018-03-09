<?php

namespace App\Service;

class RenderService
{
    /**
     * string
     */
    private $nodeRoot;

    /**
     * string
     */
    private $jsRoot;

    public function __construct(string $rootDirectory)
    {
        $this->nodeRoot = sprintf('%s/../node_modules', $rootDirectory);
        $this->jsRoot = sprintf('%s/../public/build/js', $rootDirectory);
    }

    public function render($path): string
    {
        $vueRenderer = file_get_contents(sprintf('%s/vue-server-renderer/basic.js', $this->nodeRoot));
        $entryPoint = file_get_contents(sprintf('%s/server.js', $this->jsRoot));

        $v8 = new \V8Js();
        try {
            ob_start();

            $js =
                <<<EOT
var process = { env: { VUE_ENV: "server", NODE_ENV: "production" } }; 
this.global = { process: process };
let url = "$path";
EOT;

            $v8->executeString($js);
            $v8->executeString($vueRenderer);
            $v8->executeString($entryPoint);
            $result = ob_get_clean();
        } catch (\Exception $e) {
            $result = $e->getMessage();
        }

        return $result;
    }
}