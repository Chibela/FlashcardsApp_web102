# Web Development Project 2 & 3 - _Industrial America Flashcards_

Submitted by: **Chibela Changwe**

This web app is a flashcard learning tool featuring _10 questions and answers about influential figures from America's Industrial Revolution_, such as Rockefeller, Carnegie, Vanderbilt, Ford, and J.P. Morgan.

## Time Spent

**Time spent:**

- Project 2: **7** hours spent in total
- Project 3: **4.5** hours spent in total

---

## ✅ Required Features - Project 2

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
- [x] Title of card set is displayed
- [x] A short description of the card set is displayed
- [x] A list of card pairs is created
- [x] The total number of cards in the set is displayed
- [x] Card set is represented as an array of objects containing question/answer pairs
- [x] **A single card at a time is displayed**
- [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
- [x] Clicking on a card flips it over to show the back
- [x] Clicking again flips it back to the front
- [x] **Clicking on the next button displays a random new card**

---

## ➕ Additional Features

- [x] Sidebar with “About This Set” section that remains static while cards change

---

## ✅ Required Features - Project 3

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box _before_ seeing the flipside of the card**

  - Application features a clearly labeled input box with a submit button where users can type in a guess.
  - Clicking on the submit button with an **incorrect** answer shows visual feedback (red border) that it is wrong.
  - Clicking on the submit button with a **correct** answer shows visual feedback (green border) that it is correct.

- [x] **The user can navigate through an ordered list of cards**

  - A **Next** button displayed on the card navigates to the next card in sequence when clicked.
  - A **Back** button displayed on the card returns to the previous card when clicked.
  - Both buttons have visual feedback (disabled and grayed out) when the user is at the beginning or end of the list.

---

## Optional / Stretch Features Implemented

- [x] **Shuffle button to randomize cards**

  - Users can click a **Shuffle** button to randomize the next displayed card.
  - Cards remain in their normal order unless shuffle mode is toggled on.
  - Shuffle mode persists for navigation (Back / Next) until turned off.

- [x] **Flexible answer matching**

  - User guesses are considered correct even if they only _partially_ match the answer.
  - The app ignores case and punctuation discrepancies.
  - Example: “rockefeller” and “John D. Rockefeller” both count as correct.

- [x] **Streak counter**

  - A **current streak** increments each time the user guesses correctly.
  - The **longest streak** updates only when the current streak exceeds it.
  - The longest streak updates after a wrong answer is submitted (not mid-round).

---

## Additional Features

- [x] Prevents repeated submissions of the same correct answer to avoid streak inflation.

---

## Challenges

- Implementing the **shuffle/randomization** feature while maintaining correct forward and backward navigation logic was tricky.
- It required careful state handling to ensure cards returned to normal sequence after shuffle mode was deactivated.

---

## 🎥 Video Walkthrough 2 & 3

<img src='https://raw.githubusercontent.com//Chibela/FlashcardsApp_web102/main/public/walkthrough2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<img src='https://raw.githubusercontent.com//Chibela/FlashcardsApp_web102/main/public/walkthrough3.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif

---

## 📄 License

Copyright [2025] [Chibela Changwe]
