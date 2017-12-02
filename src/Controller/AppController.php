<?php
namespace App\Controller;

use App\Service\RenderService;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class AppController extends Controller
{
  public function index(RenderService $renderer)
  {
    return $this->render('app.html.twig', ['app' => $renderer->render()]);
  }

  public function number()
  {
    return new JsonResponse(['number' => mt_rand()]);
  }
}