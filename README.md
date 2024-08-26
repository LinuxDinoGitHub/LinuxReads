# Linux Reads React Native app (Prototype)
## Introduction
Reading is one of the most fundamental information transfer mediums throughout history, without it, innovation would not have been possible.

I, myself, as a 13-year-old child fail to appreciate the art of this great invention, constantly being told to read more and expand my knowledge.

But as you know, I lack the motivation to do so like many others.

So what did I do? I spent some time building a random reading app that's supposed to keep me motivated.

Demo:

![0](https://github.com/user-attachments/assets/7778f5e0-aa63-4c6d-9984-1e7c384ba6fc)

## How to download

1. Clone this git repository by running `git clone https://github.com/LinuxDinoGitHub/LinuxReads` to your local machine.
2. Navigate to the cloned repository through a terminal, either command prompt or VS code terminal, or something else.
3. Run `npx expo start`
4. Download the expo app on your Android/ios phone.
5. Scan the QR code that appears in the terminal.
6. The app should run.

## How to use

This should be the main menu of the app:

![0](https://github.com/user-attachments/assets/b62dbed2-a7da-4f27-8e32-480f3d949fe1)

### Make a book

Each book has its own journal. To create a new book, click the add button on the bottom right and then a menu should open up.

![image](https://github.com/user-attachments/assets/f824cd49-01d5-4782-b1f3-30f3dbb788c6)

On the menu, click the "+Create new book" button to create a new book.

![image](https://github.com/user-attachments/assets/4561ff6e-4501-4e70-9f76-53feb368f260)

You then would have to enter the book's:

- Title
- Author
- and Maximum page

![0](https://github.com/user-attachments/assets/b649de68-cf12-462b-b1f5-fc35b8b29362)

Note: This process is only needed when you first create a new book.

Ta-Da! You're done creating the book.

Now, what can we do?

### Logging in your reading

![0](https://github.com/user-attachments/assets/a225fd10-f4d5-4a33-86dd-578a22bc903e)

To journal, go back to the first menu (The one that shows up after pressing the + button), and enter the form fields:

- Book name (Has to be the same as what you specified in the creation menu)
- Current page
- Time spent reading
- Entry comments (Your thoughts basically)

An error could show up when submitting, you can troubleshoot the following:

- Error message showing that it is not a valid book even though you have already created it - Press the button again, it's a bug I never bothered to fix
- Book not valid - Make sure your book exists, no spelling errors were made or anything.
- Page not valid - Make sure your page number is in the range of what you specified during the creation.


Yeah that's basically it.

### Viewing your journals

Simply press on the desired book on the first screen without any floating menus, and another page should open that looks like the following:

![0](https://github.com/user-attachments/assets/b34b4362-cb90-4cc9-af26-1c25865fd58d)

More features coming soon! Thanks!
