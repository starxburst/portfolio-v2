export  const scrollToComponent = (id: string) => {
  const workingExperience = document.getElementById(id);
  if (workingExperience) {
    workingExperience.scrollIntoView({ behavior: 'smooth' });
  }
};