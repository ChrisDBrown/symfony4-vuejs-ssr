<?php

namespace App\Controller;

use App\Service\RenderService;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class AppController extends Controller
{
    public function index(Request $request, RenderService $renderer)
    {
        return $this->render('app.html.twig', ['app' => $renderer->render($request->getRequestUri())]);
    }

    public function fetchNumber(Request $request, RenderService $renderer)
    {
        return $this->render('app.html.twig', [
            'app' => $renderer->render($request->getRequestUri()),
            'initial_state' => ['number' => mt_rand()]
        ]);
    }
}