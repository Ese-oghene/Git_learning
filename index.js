function example() {
    if (true) {
        var x = 10;    // function-scoped
        let y = 20;    // block-scoped
        const z = 30;  // block-scoped, cannot be reassigned

        // Reassigning
        y = 25;  // Allowed

        // z = 35;  // Error: Assignment to constant variable
    }
    console.log(x); 
}

example();

