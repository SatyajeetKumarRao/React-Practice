function getValuesFromURL({ searchParam }) {
    const selectedTab = searchParam.get('tab') || 'profile';
    return { selectedTab }
}

export { getValuesFromURL }