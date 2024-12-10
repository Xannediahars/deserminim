// Example values
let dds = [
    { amp: function(value) { console.log('Amplitude set to:', value); }},
    { amp: function(value) { console.log('Amplitude set to:', value); }},
    // More elements...
];

let i = 0; // Index of the element we want to modify
let frac = 0.75; // Fractional value
let units = {
    percent: 100 // Percentage unit
};

// Set amplitude of the i-th element in dds
dds[i].amp(frac * units.percent);
