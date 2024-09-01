    const test_method = () => {
      const startDate = new Date('2024-08-01');
      const getNextProblemIndex = (problemList, startDate, currentDate) => {
        const daysSinceStart = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
        return daysSinceStart % problemList.length;
      };
      // Tests
      const threeProblems = ['Problem 1', 'Problem 2', 'Problem 3'];
      const fiveProblems = ['Problem 1', 'Problem 2', 'Problem 3', 'Problem 4', 'Problem 5'];
      threeProblems.forEach((value, index) => {
        const newDay = new Date(startDate.getTime() + (index * 24 * 60 * 60 * 1000));
        console.log(`Three problem index: ${getNextProblemIndex(threeProblems, startDate, newDay)}`);
      });
      fiveProblems.forEach((value, index) => {
        const newDay = new Date(startDate.getTime() + (index * 24 * 60 * 60 * 1000));
        console.log(`Five problem index: ${getNextProblemIndex(fiveProblems, startDate, newDay)}`);
      });
      console.log(`Start with three problems: ${getNextProblemIndex(threeProblems, startDate, new Date('2024-08-03'))}`);
      console.log(`Switch to with five problems: ${getNextProblemIndex(fiveProblems, startDate, new Date('2024-08-04'))}`);
      }
