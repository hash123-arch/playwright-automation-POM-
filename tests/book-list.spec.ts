import { test, expect } from '@playwright/test';

import { BookPage } from '../pages/bookListPage';

test.describe('Book List Application', () => {

  let bookPage: BookPage;

  test.beforeEach(async ({ page }) => {

    // Initialize POM and navigate before each test
    bookPage = new BookPage(page);

    await bookPage.goto();
  });

  test('should successfully add and delete a book', async ({ page }) => {
    // Test Data
    const testTitle = 'The Great Gatsby';

    const testAuthor = 'F. Scott Fitzgerald';

    const testIsbn = '978-0743273565';

    // --- STEP 1: Add a Book ---
    await bookPage.addBook(testTitle, testAuthor, testIsbn);

    // Verify the book is added to the DOM
    const bookRow = await bookPage.getBookRowByISBN(testIsbn);

    await expect(bookRow).toBeVisible();

    await expect(bookRow).toContainText(testTitle);

    await expect(bookRow).toContainText(testAuthor);

    // --- STEP 2: Delete the Book ---
    // (Optional) Automatically accept browser dialogs if the app triggers a native JS 'confirm' alert on deletion
    page.on('dialog', dialog => dialog.accept());
    
    await bookPage.deleteBookByISBN(testIsbn);

    // Verify the book is entirely removed from the table
    await expect(bookRow).toHaveCount(0);

  });

});