const pageSegments = [...document.querySelectorAll('section.page-segment')]

const highlightNavigationLinkOnScroll = rootContainer => {
  const observer = new IntersectionObserver(updateActiveLink, {
    root: rootContainer,
    threshold: [0.5, 0.75]
  })

  pageSegments.forEach(segment => observer.observe(segment))
}

const updateActiveLink = entries => {
  entries.forEach((entry) => {
    const segmentName = entry.target.getAttribute('data-segment-name')
    const correspondingNavLink = document.querySelector(`li[data-segment-name=${segmentName}]`)

    if (entry.isIntersecting) {
      correspondingNavLink.classList.add('active')
    } else {
      correspondingNavLink.classList.remove('active')
    }
  })
}

export {
  highlightNavigationLinkOnScroll
}
