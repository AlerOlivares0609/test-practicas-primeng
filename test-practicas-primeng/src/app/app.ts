import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { updatePrimaryPalette } from '@primeuix/themes';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

interface ColorOption {
  name: string;
  palette: Record<string, string>;
  swatch: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToggleSwitch, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private platformId = inject(PLATFORM_ID);

  darkMode = signal(false);
  activeColor = signal('Emerald');

  colors: ColorOption[] = [
    {
      name: 'Emerald',
      swatch: '#10b981',
      palette: {
        50: '{emerald.50}', 100: '{emerald.100}', 200: '{emerald.200}',
        300: '{emerald.300}', 400: '{emerald.400}', 500: '{emerald.500}',
        600: '{emerald.600}', 700: '{emerald.700}', 800: '{emerald.800}',
        900: '{emerald.900}', 950: '{emerald.950}'
      }
    },
    {
      name: 'Blue',
      swatch: '#3b82f6',
      palette: {
        50: '{blue.50}', 100: '{blue.100}', 200: '{blue.200}',
        300: '{blue.300}', 400: '{blue.400}', 500: '{blue.500}',
        600: '{blue.600}', 700: '{blue.700}', 800: '{blue.800}',
        900: '{blue.900}', 950: '{blue.950}'
      }
    },
    {
      name: 'Violet',
      swatch: '#8b5cf6',
      palette: {
        50: '{violet.50}', 100: '{violet.100}', 200: '{violet.200}',
        300: '{violet.300}', 400: '{violet.400}', 500: '{violet.500}',
        600: '{violet.600}', 700: '{violet.700}', 800: '{violet.800}',
        900: '{violet.900}', 950: '{violet.950}'
      }
    },
    {
      name: 'Rose',
      swatch: '#f43f5e',
      palette: {
        50: '{rose.50}', 100: '{rose.100}', 200: '{rose.200}',
        300: '{rose.300}', 400: '{rose.400}', 500: '{rose.500}',
        600: '{rose.600}', 700: '{rose.700}', 800: '{rose.800}',
        900: '{rose.900}', 950: '{rose.950}'
      }
    },
    {
      name: 'Orange',
      swatch: '#f97316',
      palette: {
        50: '{orange.50}', 100: '{orange.100}', 200: '{orange.200}',
        300: '{orange.300}', 400: '{orange.400}', 500: '{orange.500}',
        600: '{orange.600}', 700: '{orange.700}', 800: '{orange.800}',
        900: '{orange.900}', 950: '{orange.950}'
      }
    },
    {
      name: 'Teal',
      swatch: '#14b8a6',
      palette: {
        50: '{teal.50}', 100: '{teal.100}', 200: '{teal.200}',
        300: '{teal.300}', 400: '{teal.400}', 500: '{teal.500}',
        600: '{teal.600}', 700: '{teal.700}', 800: '{teal.800}',
        900: '{teal.900}', 950: '{teal.950}'
      }
    },
  ];

  applyColor(color: ColorOption) {
    this.activeColor.set(color.name);
    updatePrimaryPalette(color.palette);
  }

  toggleDarkMode(value: boolean) {
    if (!isPlatformBrowser(this.platformId)) return;
    if (value) {
      document.documentElement.classList.add('app-dark');
    } else {
      document.documentElement.classList.remove('app-dark');
    }
  }
}
