 function mapValue(value, initialRangeStart, initialRangeEnd, finalRangeStart, finalRangeEnd) {
     if (initialRangeEnd == initialRangeStart)
         console.error("Can't devide by zero");
     else {
         return (value - initialRangeStart) * (finalRangeEnd - finalRangeStart) / (initialRangeEnd - initialRangeStart) + finalRangeStart

     }
 }

 function random(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }


 function getMs(fps) {
     return 1000 / fps
 }

 function constrain(val, min, max) {
     if (val > max)
         return max
     if (val < min)
         return min
     return val
 }