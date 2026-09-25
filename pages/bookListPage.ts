import { expect, type Locator, type Page } from '@playwright/test';

export class BookPage {

  readonly page: Page;
  
  // Form Locators
  readonly titleInput: Locator;

  readonly authorInput: Locator;

  readonly isbnInput: Locator;

  readonly submitButton: Locator;
  
  // Table Locators
  readonly tableRows: Locator;
  
  constructor(page: Page) {

    this.page = page;
    
    // Locators for the add book form
    this.titleInput = page.locator('#title');

    this.authorInput = page.locator('#author');

    this.isbnInput = page.locator('#isbn');

    this.submitButton = page.locator('input[type="submit"]');
    
    // Locators for the book list table
    this.tableRows = page.locator('table tbody tr');
  }

  /** Navigates to the Book List app */
  async goto() {
    await this.page.goto('https://book-23.netlify.app/');
  }

  /** Fills out the form and submits a new book */
  async addBook(title: string, author: string, isbn: string) {

    await this.titleInput.fill(title);

    await this.authorInput.fill(author);

    await this.isbnInput.fill(isbn);

    await this.submitButton.click();
  }

  /** Locates a specific book row dynamically based on its ISBN */
  async getBookRowByISBN(isbn: string) {

    // Filters the table rows to find the one containing our unique ISBN
    return this.tableRows.filter({ hasText: isbn });

  }

  /** Finds the book by ISBN and clicks its associated delete button */
  async deleteBookByISBN(isbn: string) {

    const row = await this.getBookRowByISBN(isbn);

    
    // Finds the red 'X' delete button inside that specific row
    const deleteBtn = row.locator('.delete'); 
    
    await deleteBtn.click();
  }
}