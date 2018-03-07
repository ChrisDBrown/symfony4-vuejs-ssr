<?php


namespace App\Controller;


use Symfony\Component\HttpFoundation\JsonResponse;

class ApiController
{
    public function number()
    {
        return new JsonResponse(['number' => mt_rand()]);
    }
}