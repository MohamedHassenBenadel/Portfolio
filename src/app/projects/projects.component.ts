import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // Define properties with correct types
  private modal: HTMLDivElement | null = null;
  private mainImage: HTMLImageElement | null = null;
  private closeModal: HTMLSpanElement | null = null;

  ngOnInit(): void {
    // Initialize properties with correct DOM elements
    this.modal = document.getElementById('imageModal') as HTMLDivElement;
    this.mainImage = document.getElementById('mainImage') as HTMLImageElement;
    this.closeModal = document.getElementById('modalClose') as HTMLSpanElement;

    // Ensure elements exist before attaching event listeners
    if (this.mainImage && this.modal && this.closeModal) {
      this.mainImage.onclick = () => {
        this.modal!.style.display = 'block';
      };

      this.closeModal.onclick = () => {
        this.modal!.style.display = 'none';
      };

      window.onclick = (event: MouseEvent) => {
        if (event.target === this.modal) {
          this.modal!.style.display = 'none';
        }
      };
    }
  }
}
