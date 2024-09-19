function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });

    // Show the selected section
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('hidden');
}

// document. querySelectorAll('style,link[rel="stylesheet"]') .forEach (e=> e.remove());