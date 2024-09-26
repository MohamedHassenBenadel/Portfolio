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

    // Handle open modal on clicking "Gallery" link
    document.querySelectorAll('.demo-link').forEach(link => {
      (link as HTMLElement).onclick = (event: Event) => {
        event.preventDefault(); // Prevent default action
        this.openModal();
      };
    });

    // Handle close modal
    const closeModal = document.getElementById('modalClose');
    if (closeModal) {
      closeModal.onclick = () => this.closeModal();
    }

    // Close modal if clicked outside the modal content
    window.onclick = (event: MouseEvent) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
    };
  }

  openModal(): void {
    if (this.modal) {
      this.modal.style.display = 'block';  // Open the modal
      this.showSlides(this.slideIndex);  // Display the current slide
    }
  }

  closeModal(): void {
    if (this.modal) {
      this.modal.style.display = 'none';  // Close the modal
    }
  }

  showSlides(n: number): void {
    const slides = document.querySelectorAll('.modal-slide');
    if (slides.length === 0) return;  // Return if no slides are available

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    slides.forEach((slide, index) => {
      (slide as HTMLElement).style.display = (index + 1 === this.slideIndex) ? 'block' : 'none';  // Show/Hide slides
    });
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }
}
