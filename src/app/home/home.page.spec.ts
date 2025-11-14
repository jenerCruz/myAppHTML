// src/app/home/home.page.ts

import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
// Importamos InAppBrowser si decides usarlo para cargar el HTML,
// pero usaremos window.location.href para el Webview local simple.

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
    // ⚠️ Importante: Esto solo funciona en el dispositivo/emulador (no en el navegador)
    if (Capacitor.isNativePlatform()) {
      // Obtenemos la URL base nativa que apunta a la carpeta 'assets'
      // La ruta para el archivo 'custom.html' es 'assets/custom.html'
      // En un APK, esta URL será algo como 'capacitor://localhost/_capacitor_assets/custom.html'
      const customHtmlPath = 'assets/custom.html';
      
      // Reemplazamos la vista actual del Webview con tu HTML personalizado.
      // Esto 'secuestra' la vista principal de Ionic y muestra tu HTML.
      window.location.href = customHtmlPath;
    }
  }
}
