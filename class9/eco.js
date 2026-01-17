function toggleUnit(unitNumber) {
  const selectedUnit = document.getElementById("unit" + unitNumber);
  
  // Close other units
  document.querySelectorAll(".subunit").forEach(unit => {
    if (unit !== selectedUnit) {
      unit.style.display = "none";
    }
  });
  
  // Toggle clicked unit
  selectedUnit.style.display =
    selectedUnit.style.display === "block" ? "none" : "block";
}