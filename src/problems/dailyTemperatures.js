// todo revisite
const dailyTemperatures = function(temperatures) {
   const stack = []
   const result = Array(temperatures.length).fill(0);

   for (let i = 0; i < temperatures.length; i++) {
       const temprature = temperatures[i]

       while (stack.length && temprature > temperatures[stack[stack.length - 1]]) {
           const prevIndex = stack.pop()
           result[prevIndex] = i - prevIndex

       }

       stack.push(i)

   }

   return result
};