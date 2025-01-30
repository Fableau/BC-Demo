const numberToFormattedPrice = num => `€${num.toLocaleString('nl', { useGrouping: true })}`;

export default numberToFormattedPrice;