export const getFilterPriceName = (price) => {
    switch (price) {
        case 1:
            return "Cheap";
        case 2:
            return "Moderate";
        case 3:
            return "Expensive";
    }
};

export const clearFilters = () => {
    for (const price in selectedPrices) {
        selectedPrices[price] = false;
    }
    for (const type in selectedTypes) {
        selectedTypes[type] = false;
    }
    for (const rating in selectedRatings) {
        selectedRatings[rating] = false;
    }
};