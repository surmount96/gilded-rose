# Gilded Rose

### Guidance Notes

- Clone or fork this repo, and open up the js directory to access the codebase.

###  Gilded Rose

Gilded Rose is a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. Update and New feature were added to the system.

### Approaches to Challenge

After cloning and setting up the app on my computer, I adopted git branching strategies so I can work on each feature branches.
I also took time to get myself acquainted with the codebase structure which includes the already setup test environments(Jasmine). The requirements specification are stated below. 
Tackling each of the feature ;

- The Quality of item is never negative;

`
Holding all value constant, I had to ensure the value of quality is not less than zero by having a conditional statement that checks If the value of quality is < 0 then set it’s default to 0.
`
- “Aged brie” actually increases in Quality the older it gets

`
In the update_quality method, with a conditional statement checks name is “Aged brie” to increase the value since it wasn’t specify how many times it should increase.
`

- The Quality of an item is never more than 50

`
At this stage, the generality of all quality at each level irrespective of what the condition is for the item, the conditional statement ensure it never passes 50.
`

- “Sulfuras”, being a legendary item, never has to sold or decreases in Quality

`
A conditional statement is used to check “Sulfuras” in the list so as to ensure it never decreases in quality.
`
- "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
  - Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
  - Quality drops to 0 after the concert

`
Based on the requirement, I had to check each stages of sell in days so I can implement the condition as stated.
`
- We have recently signed a supplier of conjured items. This requires an update to our system:

`
This gave me an insight to create input that allows user to dynamically add item to the existing list. It also allows users to set days in which I ensured the inputs are all validated.
`

At the end, after which all features has been completed, I wrote a positivity test based on the testcases in the requirements specification. 


#### Test
````
To run the test, simply open the SpecRunner.html in your browser.
````
