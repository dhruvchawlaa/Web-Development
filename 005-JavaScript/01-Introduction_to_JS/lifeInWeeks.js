function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var yearsLeft = 90 -age;
        var monthsLeft = yearsLeft * 12;
        var weeksLeft = yearsLeft * 52;
        var daysLeft = yearsLeft * 365;
        
        console.log("You have "+daysLeft+" days, "+weeksLeft+" weeks, and "+monthsLeft+" months left.");
        
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(20);