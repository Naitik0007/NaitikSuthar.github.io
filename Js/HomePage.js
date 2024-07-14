const options = document.querySelectorAll('.option');
const contents = document.querySelectorAll('.content');

const optionContentMap = {
  techdegree: 'FreeCourses',
  courses: 'coursesContent',
  businesses: 'businessesContent',
  plans: 'Community'
};

options.forEach((option) => {
  option.addEventListener('click', () => {
    
    contents.forEach((content) => {
      content.classList.remove('active');
    });

    const contentId = optionContentMap[option.id];
    const content = document.getElementById(contentId);
    content.classList.add('active');
  });
});