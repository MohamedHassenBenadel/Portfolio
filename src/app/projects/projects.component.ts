import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private modal: HTMLElement | null = null;
  private slideIndex: number = 1;

  ngOnInit(): void {
    this.modal = document.getElementById('imageModal');
    this.showSlides(this.slideIndex);

    // Handle open and close modal
    document.querySelectorAll('.demo-link').forEach(link => {
      (link as HTMLElement).onclick = (event: Event) => {
        event.preventDefault(); // Prevent default action
        this.openModal();
      };
    });

    const closeModal = document.getElementById('modalClose');
    if (closeModal) {
      closeModal.onclick = () => this.closeModal();
    }

    window.onclick = (event: MouseEvent) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
    };
  }

  openModal(): void {
    if (this.modal) {
      this.modal.style.display = 'block';
    }
  }

  closeModal(): void {
    if (this.modal) {
      this.modal.style.display = 'none';
    }
  }

  showSlides(n: number): void {
    const slides = document.querySelectorAll('.modal-slide');
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    slides.forEach((slide, index) => {
      (slide as HTMLElement).style.display = (index + 1 === this.slideIndex) ? 'block' : 'none';
    });
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }
}
