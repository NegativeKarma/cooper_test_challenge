# Cooper Test

## Project with JavaScript, weekend challenge week 2

**Introduction to the project**

* Create a function that takes in consideration the gender, age and completed distance
of an athlete and returns a rating based on the Cooper test.

**How to test the Cooper test**

1. Run `open SpecRunner.html` on your terminal, this will show 8 green specs confirming
that the program is running properly.
2. Use the secondary click on your mouse on the SpecRunner page and choose `Inspect`,
this will open the Chrome inspect tool.
3. Choose `console` in the inspect tool.
4. Type `your_name = new Athlete({gender: 'your_gender', age: your_age, completed_distance: your_distance_run})`. Please notice that for gender you have to write `'male'` or `'female'`, for age and completed_distance you need to write numbers as integers and not negative numbers.
5. To get your Cooper test rating, type `CooperResponse(your_name)`.
