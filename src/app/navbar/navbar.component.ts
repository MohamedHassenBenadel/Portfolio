import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentSection: string = '';
  private scrollSubject = new Subject<void>();

  constructor(private router: Router) {
    // Handle scroll events with throttling
    this.scrollSubject.pipe(throttleTime(100)).subscribe(() => this.onScroll());
  }

  ngOnInit() {
    // Initial scroll event to set the current section
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollSubject.next();
  }

  private onScroll() {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    let currentSection = '';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementBottom = rect.bottom + scrollPosition;

        // Adjust the condition to ensure detection of sections including 'home'
        if (
          (scrollPosition >= elementTop - viewportHeight / 2 && scrollPosition < elementBottom - viewportHeight / 2) ||
          (section === 'home' && scrollPosition === 0) // Special handling for 'home' section
        ) {
          currentSection = section;
          break;
        }
      }
    }

    // Special handling for sections near the bottom
    if (scrollPosition + viewportHeight >= document.documentElement.scrollHeight - 100) {
      currentSection = 'contact';
    }

    this.currentSection = currentSection;
  }

  scrollTo(section: string) {
    this.router.navigate([], { fragment: section });
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }
}