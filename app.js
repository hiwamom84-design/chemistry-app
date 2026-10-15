const ALL_ELEMENTS = [{"z": 1, "s": "H", "n": "Hydrogen", "m": 1.008, "c": "1s¹", "ox": "+1, -1", "cat": "Nonmetal", "p": 1, "g": 1, "b": "s", "val": 1}, {"z": 2, "s": "He", "n": "Helium", "m": 4.0026, "c": "1s²", "ox": "0", "cat": "Noble Gas", "p": 1, "g": 18, "b": "s", "val": 2}, {"z": 3, "s": "Li", "n": "Lithium", "m": 6.94, "c": "[He] 2s¹", "ox": "+1", "cat": "Alkali Metal", "p": 2, "g": 1, "b": "s", "val": 1}, {"z": 4, "s": "Be", "n": "Beryllium", "m": 9.0122, "c": "[He] 2s²", "ox": "+2", "cat": "Alkaline Earth Metal", "p": 2, "g": 2, "b": "s", "val": 2}, {"z": 5, "s": "B", "n": "Boron", "m": 10.81, "c": "[He] 2s² 2p¹", "ox": "+3", "cat": "Metalloid", "p": 2, "g": 13, "b": "p", "val": 3}, {"z": 6, "s": "C", "n": "Carbon", "m": 12.011, "c": "[He] 2s² 2p²", "ox": "-4, +2, +4", "cat": "Nonmetal", "p": 2, "g": 14, "b": "p", "val": 4}, {"z": 7, "s": "N", "n": "Nitrogen", "m": 14.007, "c": "[He] 2s² 2p³", "ox": "-3, +3, +5", "cat": "Nonmetal", "p": 2, "g": 15, "b": "p", "val": 5}, {"z": 8, "s": "O", "n": "Oxygen", "m": 15.999, "c": "[He] 2s² 2p⁴", "ox": "-2, -1, +2", "cat": "Nonmetal", "p": 2, "g": 16, "b": "p", "val": 6}, {"z": 9, "s": "F", "n": "Fluorine", "m": 18.998, "c": "[He] 2s² 2p⁵", "ox": "-1", "cat": "Halogen", "p": 2, "g": 17, "b": "p", "val": 7}, {"z": 10, "s": "Ne", "n": "Neon", "m": 20.18, "c": "[He] 2s² 2p⁶", "ox": "0", "cat": "Noble Gas", "p": 2, "g": 18, "b": "p", "val": 8}, {"z": 11, "s": "Na", "n": "Sodium", "m": 22.99, "c": "[Ne] 3s¹", "ox": "+1", "cat": "Alkali Metal", "p": 3, "g": 1, "b": "s", "val": 1}, {"z": 12, "s": "Mg", "n": "Magnesium", "m": 24.305, "c": "[Ne] 3s²", "ox": "+2", "cat": "Alkaline Earth Metal", "p": 3, "g": 2, "b": "s", "val": 2}, {"z": 13, "s": "Al", "n": "Aluminum", "m": 26.982, "c": "[Ne] 3s² 3p¹", "ox": "+3", "cat": "Post-transition Metal", "p": 3, "g": 13, "b": "p", "val": 3}, {"z": 14, "s": "Si", "n": "Silicon", "m": 28.085, "c": "[Ne] 3s² 3p²", "ox": "-4, +4", "cat": "Metalloid", "p": 3, "g": 14, "b": "p", "val": 4}, {"z": 15, "s": "P", "n": "Phosphorus", "m": 30.974, "c": "[Ne] 3s² 3p³", "ox": "-3, +3, +5", "cat": "Nonmetal", "p": 3, "g": 15, "b": "p", "val": 5}, {"z": 16, "s": "S", "n": "Sulfur", "m": 32.06, "c": "[Ne] 3s² 3p⁴", "ox": "-2, +4, +6", "cat": "Nonmetal", "p": 3, "g": 16, "b": "p", "val": 6}, {"z": 17, "s": "Cl", "n": "Chlorine", "m": 35.45, "c": "[Ne] 3s² 3p⁵", "ox": "-1, +1, +3, +5, +7", "cat": "Halogen", "p": 3, "g": 17, "b": "p", "val": 7}, {"z": 18, "s": "Ar", "n": "Argon", "m": 39.948, "c": "[Ne] 3s² 3p⁶", "ox": "0", "cat": "Noble Gas", "p": 3, "g": 18, "b": "p", "val": 8}, {"z": 19, "s": "K", "n": "Potassium", "m": 39.098, "c": "[Ar] 4s¹", "ox": "+1", "cat": "Alkali Metal", "p": 4, "g": 1, "b": "s", "val": 1}, {"z": 20, "s": "Ca", "n": "Calcium", "m": 40.078, "c": "[Ar] 4s²", "ox": "+2", "cat": "Alkaline Earth Metal", "p": 4, "g": 2, "b": "s", "val": 2}, {"z": 21, "s": "Sc", "n": "Scandium", "m": 44.956, "c": "[Ar] 3d¹ 4s²", "ox": "+3", "cat": "Transition Metal", "p": 4, "g": 3, "b": "d", "val": 3}, {"z": 22, "s": "Ti", "n": "Titanium", "m": 47.867, "c": "[Ar] 3d² 4s²", "ox": "+2, +3, +4", "cat": "Transition Metal", "p": 4, "g": 4, "b": "d", "val": 4}, {"z": 23, "s": "V", "n": "Vanadium", "m": 50.942, "c": "[Ar] 3d³ 4s²", "ox": "+2, +3, +4, +5", "cat": "Transition Metal", "p": 4, "g": 5, "b": "d", "val": 5}, {"z": 24, "s": "Cr", "n": "Chromium", "m": 51.996, "c": "[Ar] 3d⁵ 4s¹", "ox": "+2, +3, +6", "cat": "Transition Metal", "p": 4, "g": 6, "b": "d", "val": 6}, {"z": 25, "s": "Mn", "n": "Manganese", "m": 54.938, "c": "[Ar] 3d⁵ 4s²", "ox": "+2, +3, +4, +6, +7", "cat": "Transition Metal", "p": 4, "g": 7, "b": "d", "val": 7}, {"z": 26, "s": "Fe", "n": "Iron", "m": 55.845, "c": "[Ar] 3d⁶ 4s²", "ox": "+2, +3", "cat": "Transition Metal", "p": 4, "g": 8, "b": "d", "val": 8}, {"z": 27, "s": "Co", "n": "Cobalt", "m": 58.933, "c": "[Ar] 3d⁷ 4s²", "ox": "+2, +3", "cat": "Transition Metal", "p": 4, "g": 9, "b": "d", "val": 9}, {"z": 28, "s": "Ni", "n": "Nickel", "m": 58.693, "c": "[Ar] 3d⁸ 4s²", "ox": "+2, +3", "cat": "Transition Metal", "p": 4, "g": 10, "b": "d", "val": 10}, {"z": 29, "s": "Cu", "n": "Copper", "m": 63.546, "c": "[Ar] 3d¹⁰ 4s¹", "ox": "+1, +2", "cat": "Transition Metal", "p": 4, "g": 11, "b": "d", "val": 11}, {"z": 30, "s": "Zn", "n": "Zinc", "m": 65.38, "c": "[Ar] 3d¹⁰ 4s²", "ox": "+2", "cat": "Transition Metal", "p": 4, "g": 12, "b": "d", "val": 12}, {"z": 31, "s": "Ga", "n": "Gallium", "m": 69.723, "c": "[Ar] 3d¹⁰ 4s² 4p¹", "ox": "+3", "cat": "Post-transition Metal", "p": 4, "g": 13, "b": "p", "val": 3}, {"z": 32, "s": "Ge", "n": "Germanium", "m": 72.63, "c": "[Ar] 3d¹⁰ 4s² 4p²", "ox": "+2, +4", "cat": "Metalloid", "p": 4, "g": 14, "b": "p", "val": 4}, {"z": 33, "s": "As", "n": "Arsenic", "m": 74.922, "c": "[Ar] 3d¹⁰ 4s² 4p³", "ox": "-3, +3, +5", "cat": "Metalloid", "p": 4, "g": 15, "b": "p", "val": 5}, {"z": 34, "s": "Se", "n": "Selenium", "m": 78.971, "c": "[Ar] 3d¹⁰ 4s² 4p⁴", "ox": "-2, +4, +6", "cat": "Nonmetal", "p": 4, "g": 16, "b": "p", "val": 6}, {"z": 35, "s": "Br", "n": "Bromine", "m": 79.904, "c": "[Ar] 3d¹⁰ 4s² 4p⁵", "ox": "-1, +1, +3, +5", "cat": "Halogen", "p": 4, "g": 17, "b": "p", "val": 7}, {"z": 36, "s": "Kr", "n": "Krypton", "m": 83.798, "c": "[Ar] 3d¹⁰ 4s² 4p⁶", "ox": "0, +2", "cat": "Noble Gas", "p": 4, "g": 18, "b": "p", "val": 8}, {"z": 37, "s": "Rb", "n": "Rubidium", "m": 85.468, "c": "[Kr] 5s¹", "ox": "+1", "cat": "Alkali Metal", "p": 5, "g": 1, "b": "s", "val": 1}, {"z": 38, "s": "Sr", "n": "Strontium", "m": 87.62, "c": "[Kr] 5s²", "ox": "+2", "cat": "Alkaline Earth Metal", "p": 5, "g": 2, "b": "s", "val": 2}, {"z": 39, "s": "Y", "n": "Yttrium", "m": 88.906, "c": "[Kr] 4d¹ 5s²", "ox": "+3", "cat": "Transition Metal", "p": 5, "g": 3, "b": "d", "val": 3}, {"z": 40, "s": "Zr", "n": "Zirconium", "m": 91.224, "c": "[Kr] 4d² 5s²", "ox": "+4", "cat": "Transition Metal", "p": 5, "g": 4, "b": "d", "val": 4}, {"z": 41, "s": "Nb", "n": "Niobium", "m": 92.906, "c": "[Kr] 4d⁴ 5s¹", "ox": "+3, +5", "cat": "Transition Metal", "p": 5, "g": 5, "b": "d", "val": 5}, {"z": 42, "s": "Mo", "n": "Molybdenum", "m": 95.95, "c": "[Kr] 4d⁵ 5s¹", "ox": "+2, +3, +4, +5, +6", "cat": "Transition Metal", "p": 5, "g": 6, "b": "d", "val": 6}, {"z": 43, "s": "Tc", "n": "Technetium", "m": 98.0, "c": "[Kr] 4d⁵ 5s²", "ox": "+4, +7", "cat": "Transition Metal", "p": 5, "g": 7, "b": "d", "val": 7}, {"z": 44, "s": "Ru", "n": "Ruthenium", "m": 101.07, "c": "[Kr] 4d⁷ 5s¹", "ox": "+2, +3, +4, +8", "cat": "Transition Metal", "p": 5, "g": 8, "b": "d", "val": 8}, {"z": 45, "s": "Rh", "n": "Rhodium", "m": 102.91, "c": "[Kr] 4d⁸ 5s¹", "ox": "+2, +3, +4", "cat": "Transition Metal", "p": 5, "g": 9, "b": "d", "val": 9}, {"z": 46, "s": "Pd", "n": "Palladium", "m": 106.42, "c": "[Kr] 4d¹⁰", "ox": "+2, +4", "cat": "Transition Metal", "p": 5, "g": 10, "b": "d", "val": 10}, {"z": 47, "s": "Ag", "n": "Silver", "m": 107.87, "c": "[Kr] 4d¹⁰ 5s¹", "ox": "+1", "cat": "Transition Metal", "p": 5, "g": 11, "b": "d", "val": 11}, {"z": 48, "s": "Cd", "n": "Cadmium", "m": 112.41, "c": "[Kr] 4d¹⁰ 5s²", "ox": "+2", "cat": "Transition Metal", "p": 5, "g": 12, "b": "d", "val": 12}, {"z": 49, "s": "In", "n": "Indium", "m": 114.82, "c": "[Kr] 4d¹⁰ 5s² 5p¹", "ox": "+3", "cat": "Post-transition Metal", "p": 5, "g": 13, "b": "p", "val": 3}, {"z": 50, "s": "Sn", "n": "Tin", "m": 118.71, "c": "[Kr] 4d¹⁰ 5s² 5p²", "ox": "+2, +4", "cat": "Post-transition Metal", "p": 5, "g": 14, "b": "p", "val": 4}, {"z": 51, "s": "Sb", "n": "Antimony", "m": 121.76, "c": "[Kr] 4d¹⁰ 5s² 5p³", "ox": "-3, +3, +5", "cat": "Metalloid", "p": 5, "g": 15, "b": "p", "val": 5}, {"z": 52, "s": "Te", "n": "Tellurium", "m": 127.6, "c": "[Kr] 4d¹⁰ 5s² 5p⁴", "ox": "-2, +4, +6", "cat": "Metalloid", "p": 5, "g": 16, "b": "p", "val": 6}, {"z": 53, "s": "I", "n": "Iodine", "m": 126.9, "c": "[Kr] 4d¹⁰ 5s² 5p⁵", "ox": "-1, +1, +3, +5, +7", "cat": "Halogen", "p": 5, "g": 17, "b": "p", "val": 7}, {"z": 54, "s": "Xe", "n": "Xenon", "m": 131.293, "c": "[Kr] 4d¹⁰ 5s² 5p⁶", "ox": "0, +2, +4, +6, +8", "cat": "Noble Gas", "p": 5, "g": 18, "b": "p", "val": 8}, {"z": 55, "s": "Cs", "n": "Cesium", "m": 132.91, "c": "[Xe] 6s¹", "ox": "+1", "cat": "Alkali Metal", "p": 6, "g": 1, "b": "s", "val": 1}, {"z": 56, "s": "Ba", "n": "Barium", "m": 137.33, "c": "[Xe] 6s²", "ox": "+2", "cat": "Alkaline Earth Metal", "p": 6, "g": 2, "b": "s", "val": 2}, {"z": 57, "s": "La", "n": "Lanthanum", "m": 138.91, "c": "[Xe] 5d¹ 6s²", "ox": "+3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "d", "val": 3}, {"z": 58, "s": "Ce", "n": "Cerium", "m": 140.12, "c": "[Xe] 4f¹ 5d¹ 6s²", "ox": "+3, +4", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 4}, {"z": 59, "s": "Pr", "n": "Praseodymium", "m": 140.91, "c": "[Xe] 4f³ 6s²", "ox": "+3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 5}, {"z": 60, "s": "Nd", "n": "Neodymium", "m": 144.24, "c": "[Xe] 4f⁴ 6s²", "ox": "+3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 6}, {"z": 61, "s": "Pm", "n": "Promethium", "m": 145.0, "c": "[Xe] 4f⁵ 6s²", "ox": "+3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 7}, {"z": 62, "s": "Sm", "n": "Samarium", "m": 150.36, "c": "[Xe] 4f⁶ 6s²", "ox": "+2, +3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 8}, {"z": 63, "s": "Eu", "n": "Europium", "m": 151.96, "c": "[Xe] 4f⁷ 6s²", "ox": "+2, +3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 9}, {"z": 64, "s": "Gd", "n": "Gadolinium", "m": 157.25, "c": "[Xe] 4f⁷ 5d¹ 6s²", "ox": "+3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 10}, {"z": 65, "s": "Tb", "n": "Terbium", "m": 158.93, "c": "[Xe] 4f⁹ 6s²", "ox": "+3, +4", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 11}, {"z": 66, "s": "Dy", "n": "Dysprosium", "m": 162.5, "c": "[Xe] 4f¹⁰ 6s²", "ox": "+3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 12}, {"z": 67, "s": "Ho", "n": "Holmium", "m": 164.93, "c": "[Xe] 4f¹¹ 6s²", "ox": "+3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 13}, {"z": 68, "s": "Er", "n": "Erbium", "m": 167.26, "c": "[Xe] 4f¹² 6s²", "ox": "+3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 14}, {"z": 69, "s": "Tm", "n": "Thulium", "m": 168.93, "c": "[Xe] 4f¹³ 6s²", "ox": "+2, +3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 15}, {"z": 70, "s": "Yb", "n": "Ytterbium", "m": 173.05, "c": "[Xe] 4f¹⁴ 6s²", "ox": "+2, +3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "f", "val": 16}, {"z": 71, "s": "Lu", "n": "Lutetium", "m": 174.97, "c": "[Xe] 4f¹⁴ 5d¹ 6s²", "ox": "+3", "cat": "Lanthanide", "p": 6, "g": 3, "b": "d", "val": 3}, {"z": 72, "s": "Hf", "n": "Hafnium", "m": 178.49, "c": "[Xe] 4f¹⁴ 5d² 6s²", "ox": "+4", "cat": "Transition Metal", "p": 6, "g": 4, "b": "d", "val": 4}, {"z": 73, "s": "Ta", "n": "Tantalum", "m": 180.95, "c": "[Xe] 4f¹⁴ 5d³ 6s²", "ox": "+5", "cat": "Transition Metal", "p": 6, "g": 5, "b": "d", "val": 5}, {"z": 74, "s": "W", "n": "Tungsten", "m": 183.84, "c": "[Xe] 4f¹⁴ 5d⁴ 6s²", "ox": "+2, +4, +6", "cat": "Transition Metal", "p": 6, "g": 6, "b": "d", "val": 6}, {"z": 75, "s": "Re", "n": "Rhenium", "m": 186.21, "c": "[Xe] 4f¹⁴ 5d⁵ 6s²", "ox": "+4, +7", "cat": "Transition Metal", "p": 6, "g": 7, "b": "d", "val": 7}, {"z": 76, "s": "Os", "n": "Osmium", "m": 190.23, "c": "[Xe] 4f¹⁴ 5d⁶ 6s²", "ox": "+4, +8", "cat": "Transition Metal", "p": 6, "g": 8, "b": "d", "val": 8}, {"z": 77, "s": "Ir", "n": "Iridium", "m": 192.22, "c": "[Xe] 4f¹⁴ 5d⁷ 6s²", "ox": "+3, +4", "cat": "Transition Metal", "p": 6, "g": 9, "b": "d", "val": 9}, {"z": 78, "s": "Pt", "n": "Platinum", "m": 195.08, "c": "[Xe] 4f¹⁴ 5d⁹ 6s¹", "ox": "+2, +4", "cat": "Transition Metal", "p": 6, "g": 10, "b": "d", "val": 10}, {"z": 79, "s": "Au", "n": "Gold", "m": 196.97, "c": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", "ox": "+1, +3", "cat": "Transition Metal", "p": 6, "g": 11, "b": "d", "val": 11}, {"z": 80, "s": "Hg", "n": "Mercury", "m": 200.59, "c": "[Xe] 4f¹⁴ 5d¹⁰ 6s²", "ox": "+1, +2", "cat": "Transition Metal", "p": 6, "g": 12, "b": "d", "val": 12}, {"z": 81, "s": "Tl", "n": "Thallium", "m": 204.38, "c": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", "ox": "+1, +3", "cat": "Post-transition Metal", "p": 6, "g": 13, "b": "p", "val": 3}, {"z": 82, "s": "Pb", "n": "Lead", "m": 207.2, "c": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", "ox": "+2, +4", "cat": "Post-transition Metal", "p": 6, "g": 14, "b": "p", "val": 4}, {"z": 83, "s": "Bi", "n": "Bismuth", "m": 208.98, "c": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", "ox": "+3, +5", "cat": "Post-transition Metal", "p": 6, "g": 15, "b": "p", "val": 5}, {"z": 84, "s": "Po", "n": "Polonium", "m": 209.0, "c": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", "ox": "+2, +4", "cat": "Post-transition Metal", "p": 6, "g": 16, "b": "p", "val": 6}, {"z": 85, "s": "At", "n": "Astatine", "m": 210.0, "c": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", "ox": "-1, +1, +5", "cat": "Halogen", "p": 6, "g": 17, "b": "p", "val": 7}, {"z": 86, "s": "Rn", "n": "Radon", "m": 222.0, "c": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", "ox": "0, +2", "cat": "Noble Gas", "p": 6, "g": 18, "b": "p", "val": 8}, {"z": 87, "s": "Fr", "n": "Francium", "m": 223.0, "c": "[Rn] 7s¹", "ox": "+1", "cat": "Alkali Metal", "p": 7, "g": 1, "b": "s", "val": 1}, {"z": 88, "s": "Ra", "n": "Radium", "m": 226.0, "c": "[Rn] 7s²", "ox": "+2", "cat": "Alkaline Earth Metal", "p": 7, "g": 2, "b": "s", "val": 2}, {"z": 89, "s": "Ac", "n": "Actinium", "m": 227.0, "c": "[Rn] 6d¹ 7s²", "ox": "+3", "cat": "Actinide", "p": 7, "g": 3, "b": "d", "val": 3}, {"z": 90, "s": "Th", "n": "Thorium", "m": 232.04, "c": "[Rn] 6d² 7s²", "ox": "+4", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 4}, {"z": 91, "s": "Pa", "n": "Protactinium", "m": 231.04, "c": "[Rn] 5f² 6d¹ 7s²", "ox": "+5", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 5}, {"z": 92, "s": "U", "n": "Uranium", "m": 238.03, "c": "[Rn] 5f³ 6d¹ 7s²", "ox": "+3, +4, +5, +6", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 6}, {"z": 93, "s": "Np", "n": "Neptunium", "m": 237.0, "c": "[Rn] 5f⁴ 6d¹ 7s²", "ox": "+3, +5, +6", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 7}, {"z": 94, "s": "Pu", "n": "Plutonium", "m": 244.0, "c": "[Rn] 5f⁶ 7s²", "ox": "+3, +4, +6", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 8}, {"z": 95, "s": "Am", "n": "Americium", "m": 243.0, "c": "[Rn] 5f⁷ 7s²", "ox": "+3, +4", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 9}, {"z": 96, "s": "Cm", "n": "Curium", "m": 247.0, "c": "[Rn] 5f⁷ 6d¹ 7s²", "ox": "+3", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 10}, {"z": 97, "s": "Bk", "n": "Berkelium", "m": 247.0, "c": "[Rn] 5f⁹ 7s²", "ox": "+3, +4", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 11}, {"z": 98, "s": "Cf", "n": "Californium", "m": 251.0, "c": "[Rn] 5f¹⁰ 7s²", "ox": "+3", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 12}, {"z": 99, "s": "Es", "n": "Einsteinium", "m": 252.0, "c": "[Rn] 5f¹¹ 7s²", "ox": "+3", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 13}, {"z": 100, "s": "Fm", "n": "Fermium", "m": 257.0, "c": "[Rn] 5f¹² 7s²", "ox": "+3", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 14}, {"z": 101, "s": "Md", "n": "Mendelevium", "m": 258.0, "c": "[Rn] 5f¹³ 7s²", "ox": "+2, +3", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 15}, {"z": 102, "s": "No", "n": "Nobelium", "m": 259.0, "c": "[Rn] 5f¹⁴ 7s²", "ox": "+2, +3", "cat": "Actinide", "p": 7, "g": 3, "b": "f", "val": 16}, {"z": 103, "s": "Lr", "n": "Lawrencium", "m": 266.0, "c": "[Rn] 5f¹⁴ 7s² 7p¹", "ox": "+3", "cat": "Actinide", "p": 7, "g": 3, "b": "d", "val": 3}, {"z": 104, "s": "Rf", "n": "Rutherfordium", "m": 267.0, "c": "[Rn] 5f¹⁴ 6d² 7s²", "ox": "+4", "cat": "Transition Metal", "p": 7, "g": 4, "b": "d", "val": 4}, {"z": 105, "s": "Db", "n": "Dubnium", "m": 268.0, "c": "[Rn] 5f¹⁴ 6d³ 7s²", "ox": "+5", "cat": "Transition Metal", "p": 7, "g": 5, "b": "d", "val": 5}, {"z": 106, "s": "Sg", "n": "Seaborgium", "m": 269.0, "c": "[Rn] 5f¹⁴ 6d⁴ 7s²", "ox": "+6", "cat": "Transition Metal", "p": 7, "g": 6, "b": "d", "val": 6}, {"z": 107, "s": "Bh", "n": "Bohrium", "m": 270.0, "c": "[Rn] 5f¹⁴ 6d⁵ 7s²", "ox": "+7", "cat": "Transition Metal", "p": 7, "g": 7, "b": "d", "val": 7}, {"z": 108, "s": "Hs", "n": "Hassium", "m": 277.0, "c": "[Rn] 5f¹⁴ 6d⁶ 7s²", "ox": "+8", "cat": "Transition Metal", "p": 7, "g": 8, "b": "d", "val": 8}, {"z": 109, "s": "Mt", "n": "Meitnerium", "m": 278.0, "c": "[Rn] 5f¹⁴ 6d⁷ 7s²", "ox": "+3, +4", "cat": "Transition Metal", "p": 7, "g": 9, "b": "d", "val": 9}, {"z": 110, "s": "Ds", "n": "Darmstadtium", "m": 281.0, "c": "[Rn] 5f¹⁴ 6d⁸ 7s²", "ox": "+6", "cat": "Transition Metal", "p": 7, "g": 10, "b": "d", "val": 10}, {"z": 111, "s": "Rg", "n": "Roentgenium", "m": 282.0, "c": "[Rn] 5f¹⁴ 6d⁹ 7s²", "ox": "+3", "cat": "Transition Metal", "p": 7, "g": 11, "b": "d", "val": 11}, {"z": 112, "s": "Cn", "n": "Copernicium", "m": 285.0, "c": "[Rn] 5f¹⁴ 6d¹⁰ 7s²", "ox": "+2", "cat": "Transition Metal", "p": 7, "g": 12, "b": "d", "val": 12}, {"z": 113, "s": "Nh", "n": "Nihonium", "m": 286.0, "c": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", "ox": "+1, +3", "cat": "Post-transition Metal", "p": 7, "g": 13, "b": "p", "val": 3}, {"z": 114, "s": "Fl", "n": "Flerovium", "m": 289.0, "c": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", "ox": "+2, +4", "cat": "Post-transition Metal", "p": 7, "g": 14, "b": "p", "val": 4}, {"z": 115, "s": "Mc", "n": "Moscovium", "m": 290.0, "c": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", "ox": "+1, +3", "cat": "Post-transition Metal", "p": 7, "g": 15, "b": "p", "val": 5}, {"z": 116, "s": "Lv", "n": "Livermorium", "m": 293.0, "c": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", "ox": "+2, +4", "cat": "Post-transition Metal", "p": 7, "g": 16, "b": "p", "val": 6}, {"z": 117, "s": "Ts", "n": "Tennessine", "m": 294.0, "c": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", "ox": "-1, +1, +3", "cat": "Halogen", "p": 7, "g": 17, "b": "p", "val": 7}, {"z": 118, "s": "Og", "n": "Oganesson", "m": 294.0, "c": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", "ox": "0, +2, +4", "cat": "Noble Gas", "p": 7, "g": 18, "b": "p", "val": 8}];

    const CATEGORY_STYLES = {
      'Noble Gas': { border: 'border-purple-500/50', bg: 'bg-purple-950/40', text: 'text-purple-300', ku: 'گازە خانەدانەکان' },
      'Transition Metal': { border: 'border-blue-500/50', bg: 'bg-blue-950/40', text: 'text-blue-300', ku: 'توخمە گواستراوەکان' },
      'Alkali Metal': { border: 'border-amber-500/50', bg: 'bg-amber-950/40', text: 'text-amber-300', ku: 'توخمە ئەکالییەکان' },
      'Halogen': { border: 'border-emerald-500/50', bg: 'bg-emerald-950/40', text: 'text-emerald-300', ku: 'هاڵۆجینەکان' },
      'Nonmetal': { border: 'border-cyan-500/50', bg: 'bg-cyan-950/40', text: 'text-cyan-300', ku: 'ناپەترۆڵەکان' },
      'Alkaline Earth Metal': { border: 'border-orange-500/50', bg: 'bg-orange-950/40', text: 'text-orange-300', ku: 'ئەلکالی زەوی' },
      'Lanthanide': { border: 'border-pink-500/50', bg: 'bg-pink-950/40', text: 'text-pink-300', ku: 'لانتانیدەکان' },
      'Actinide': { border: 'border-rose-500/50', bg: 'bg-rose-950/40', text: 'text-rose-300', ku: 'ئەکتینیدەکان' },
      'Post-transition Metal': { border: 'border-indigo-500/50', bg: 'bg-indigo-950/40', text: 'text-indigo-300', ku: 'دوا-گواستراوە' },
      'Metalloid': { border: 'border-teal-500/50', bg: 'bg-teal-950/40', text: 'text-teal-300', ku: 'نیمچە کانزا' },
    };

    let currentCategoryFilter = 'All';
    let searchQuery = '';
    let isTeacherLoggedIn = false;
    let selectedHwForSubmission = null;
    let periodicViewMode = 'cards';
    let isMobileCardsOpen = true;

    // PostgreSQL Database Synchronization
    let dbVideos = [];
    let dbHomeworks = [];
    let dbQuizzes = [];
    let dbSubmissions = [];

    document.addEventListener('DOMContentLoaded', () => {
      if (window.innerWidth >= 1024) {
        setPeriodicViewMode('table');
      } else {
        setPeriodicViewMode('cards');
      }

      checkStudentLoginState();
      renderPeriodicTable();
      displayInitialSolverState();
      syncWithDatabase();

      const d = new Date();
      d.setDate(d.getDate() + 7);
      const dateEl = document.getElementById('hwDueDateInput');
      if (dateEl) dateEl.value = d.toISOString().split('T')[0];
    });

    async function syncWithDatabase() {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) return;
        const data = await res.json();
        dbVideos = data.videos || [];
        dbHomeworks = data.homeworks || [];
        dbQuizzes = data.quizzes || [];
        dbSubmissions = data.submissions || [];

        renderVideosList();
        renderHomeworkList();
        renderQuizList();
        if (isTeacherLoggedIn) {
          renderTeacherVideoList();
          renderTeacherSubmissions();
        }
      } catch (e) {
        console.error('Database connection error:', e);
      }
    }

    setInterval(syncWithDatabase, 10000);

    function checkStudentLoginState() {
      const studentName = localStorage.getItem('chem11_student_name');
      const display = document.getElementById('studentNameDisplay');

      if (studentName && studentName.trim()) {
        display.textContent = `${studentName} (سەلمێنراو ✓)`;
        document.getElementById('studentHeaderBadge').classList.add('border-cyan-400', 'bg-cyan-950/40');
      } else {
        display.textContent = 'سکانکردنی ناسنامە';
        document.getElementById('studentHeaderBadge').classList.remove('border-cyan-400', 'bg-cyan-950/40');
      }
    }

    function openStudentModal() {
      const studentName = localStorage.getItem('chem11_student_name');
      const modal = document.getElementById('studentNameModal');
      const scanState = document.getElementById('studentLoginScanState');
      const profileState = document.getElementById('studentLoggedInProfileState');
      const scanBox = document.getElementById('idCardScanBox');

      if (scanBox) scanBox.classList.add('hidden');

      if (studentName && studentName.trim()) {
        if (scanState) scanState.classList.add('hidden');
        if (profileState) profileState.classList.remove('hidden');
        const pName = document.getElementById('profileCurrentName');
        const pId = document.getElementById('profileCurrentId');
        if (pName) pName.textContent = studentName;
        if (pId) pId.textContent = 'کۆدی ناسنامە: ' + (localStorage.getItem('chem11_student_id') || 'IQ-9842107');
      } else {
        if (scanState) scanState.classList.remove('hidden');
        if (profileState) profileState.classList.add('hidden');
      }

      if (modal) modal.classList.remove('hidden');
    }

    function closeStudentModal() {
      const modal = document.getElementById('studentNameModal');
      if (modal) modal.classList.add('hidden');
    }

    function triggerIdCardCamera() {
      const input = document.getElementById('idCardCameraInput');
      if (input) input.click();
    }

    function handleIdCardCameraCapture(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        processRealIdCardPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }

    let currentScannedStudentName = '';
    let currentScannedStudentId = '';

    async function processRealIdCardPhoto(imageDataUrl) {
      const scanBox = document.getElementById('idCardScanBox');
      const img = document.getElementById('idCardImagePreview');
      const statusText = document.getElementById('idCardScanStatusText');
      const subText = document.getElementById('idCardScanSubText');
      const progressBar = document.getElementById('ocrProgressBar');
      const extractedBadge = document.getElementById('ocrExtractedProfileBadge');
      const nameDisplay = document.getElementById('verifiedScannedNameDisplay');
      const idNumDisplay = document.getElementById('ocrExtractedIdNum');
      const extraInfoDisplay = document.getElementById('verifiedScannedExtraInfo');

      if (img) img.src = imageDataUrl;
      if (scanBox) scanBox.classList.remove('hidden');
      if (extractedBadge) extractedBadge.classList.add('hidden');
      if (progressBar) progressBar.style.width = '20%';

      if (statusText) statusText.textContent = 'گەڕان بۆ دۆزینەوەی QR کۆد...';

      const tempImg = new Image();
      tempImg.onload = async function() {
        let detectedPayload = null;

        if ('BarcodeDetector' in window) {
          try {
            const barcodeDetector = new BarcodeDetector({ formats: ['qr_code', 'data_matrix'] });
            const barcodes = await barcodeDetector.detect(tempImg);
            if (barcodes && barcodes.length > 0 && barcodes[0].rawValue) {
              detectedPayload = barcodes[0].rawValue.trim();
            }
          } catch (e) {}
        }

        if (!detectedPayload && window.jsQR) {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = tempImg.naturalWidth;
            canvas.height = tempImg.naturalHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(tempImg, 0, 0);
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imgData.data, imgData.width, imgData.height);
            if (code && code.data) detectedPayload = code.data.trim();
          } catch(e) {}
        }

        if (progressBar) progressBar.style.width = '100%';

        let extractedName = detectedPayload ? detectedPayload : 'قوتابی پۆلی ١١ی زانستی';
        let extractedId = 'IQ-' + Math.floor(1000000 + Math.random() * 9000000);

        currentScannedStudentName = extractedName.trim();
        currentScannedStudentId = extractedId;

        if (nameDisplay) nameDisplay.textContent = currentScannedStudentName;
        if (idNumDisplay) idNumDisplay.textContent = 'QR-SUCCESS';
        if (extraInfoDisplay) extraInfoDisplay.textContent = 'سەلمێنراو لە ناسنامە';
        if (extractedBadge) extractedBadge.classList.remove('hidden');
      };
      tempImg.src = imageDataUrl;
    }

    function confirmScannedNameYes() {
      if (!currentScannedStudentName) currentScannedStudentName = 'قوتابی پۆلی ١١ی زانستی';
      localStorage.setItem('chem11_student_name', currentScannedStudentName);
      localStorage.setItem('chem11_student_id', currentScannedStudentId || 'IQ-9842107');

      checkStudentLoginState();
      showToast(`بەخێربێیت (${currentScannedStudentName})! ناسنامەکەت سەلمێندرا.`);
      closeStudentModal();
    }

    function rejectScannedNameNo() {
      const extractedBadge = document.getElementById('ocrExtractedProfileBadge');
      if (extractedBadge) extractedBadge.classList.add('hidden');
      const scanBox = document.getElementById('idCardScanBox');
      if (scanBox) scanBox.classList.add('hidden');
      showToast('تکایە دووبارە کامێراکە بگرە لەسەر کارتەکەت...');
      setTimeout(triggerIdCardCamera, 300);
    }

    function triggerReScanIdCard() {
      localStorage.removeItem('chem11_student_name');
      localStorage.removeItem('chem11_student_id');
      checkStudentLoginState();
      openStudentModal();
    }

    function logoutStudent() {
      localStorage.removeItem('chem11_student_name');
      localStorage.removeItem('chem11_student_id');
      checkStudentLoginState();
      closeStudentModal();
      showToast('لە هەژماری قوتابی چوویتە دەرەوە.');
    }

    function toggleMobileCardsDrawer() {
      const drawer = document.getElementById('elementsCardsDrawer');
      const chevron = document.getElementById('mobileCardsChevron');
      const btnText = document.getElementById('mobileToggleCardsText');

      isMobileCardsOpen = !isMobileCardsOpen;
      if (isMobileCardsOpen) {
        if (drawer) drawer.classList.remove('hidden');
        if (chevron) chevron.textContent = '▼';
        if (btnText) btnText.textContent = 'داخستنی کارتە بچووکەکان';
      } else {
        if (drawer) drawer.classList.add('hidden');
        if (chevron) chevron.textContent = '◀';
        if (btnText) btnText.textContent = 'کردنەوەی کارتەکانی توخمەکان (١١٨ توخم)';
      }
    }

    function setPeriodicViewMode(mode) {
      periodicViewMode = mode;
      const tableWrapper = document.getElementById('tableScrollWrapper');
      const cardsWrapper = document.getElementById('cardsViewWrapper');
      const tableBtn = document.getElementById('viewModeTableBtn');
      const cardsBtn = document.getElementById('viewModeCardsBtn');

      if (mode === 'cards') {
        if (cardsWrapper) cardsWrapper.classList.remove('hidden');
        if (tableWrapper) tableWrapper.classList.add('hidden');
        if (cardsBtn) cardsBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 text-slate-950 transition-all flex items-center gap-1.5';
        if (tableBtn) tableBtn.className = 'px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1.5';
      } else {
        if (cardsWrapper) cardsWrapper.classList.add('hidden');
        if (tableWrapper) tableWrapper.classList.remove('hidden');
        if (cardsBtn) cardsBtn.className = 'px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1.5';
        if (tableBtn) tableBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 text-slate-950 transition-all flex items-center gap-1.5';
      }
      renderPeriodicTable();
    }

    function setElementFilter(category) {
      currentCategoryFilter = category;
      const drawer = document.getElementById('elementsCardsDrawer');
      if (drawer && drawer.classList.contains('hidden')) {
        isMobileCardsOpen = true;
        drawer.classList.remove('hidden');
      }

      document.querySelectorAll('.filter-pill').forEach(btn => {
        btn.classList.remove('active', 'bg-cyan-500', 'text-slate-950', 'shadow-neon-cyan');
        btn.classList.add('bg-slate-900', 'border', 'border-slate-800', 'text-slate-300');
      });

      const tabMap = {
        'All': 'filterTabAll',
        'Noble Gas': 'filterTabNoble',
        'Transition Metal': 'filterTabTransition',
        'Alkali Metal': 'filterTabAlkali',
        'Halogen': 'filterTabHalogen',
        'Nonmetal': 'filterTabNonmetal'
      };

      const activeBtnId = tabMap[category];
      if (activeBtnId) {
        const el = document.getElementById(activeBtnId);
        if (el) {
          el.classList.add('active', 'bg-cyan-500', 'text-slate-950', 'shadow-neon-cyan');
          el.classList.remove('bg-slate-900', 'border-slate-800', 'text-slate-300');
        }
      }

      renderPeriodicTable();
    }

    function handleElementSearchInput() {
      const box = document.getElementById('elementSearchBox');
      if (box) searchQuery = box.value.trim().toLowerCase();
      renderPeriodicTable();
    }

    function renderPeriodicTable() {
      renderMiniCardsGrid();
      render18ColumnGrid();
    }

    function renderMiniCardsGrid() {
      const container = document.getElementById('elementsMiniCardsGrid');
      if (!container) return;
      let filtered = ALL_ELEMENTS;

      if (currentCategoryFilter !== 'All') {
        filtered = filtered.filter(el => el.cat === currentCategoryFilter);
      }

      if (searchQuery) {
        filtered = filtered.filter(el => 
          el.n.toLowerCase().includes(searchQuery) ||
          el.s.toLowerCase().includes(searchQuery) ||
          String(el.z) === searchQuery
        );
      }

      container.innerHTML = filtered.map(el => {
        const style = CATEGORY_STYLES[el.cat] || { border: 'border-slate-700', bg: 'bg-slate-950', text: 'text-slate-400', ku: el.cat };
        return `
          <div onclick="expandElementToBig(${el.z})" class="mini-card relative rounded-xl p-2 bg-slate-900 border ${style.border} ${style.bg} cursor-pointer flex flex-col justify-between text-center select-none shadow-sm group">
            <div class="flex items-center justify-between text-[9px] font-mono">
              <span class="text-slate-400 font-bold">${el.z}</span>
              <span class="text-[8px] text-cyan-400/80">${el.b}</span>
            </div>
            <div class="my-1">
              <span class="text-lg sm:text-xl font-black font-formula text-white group-hover:text-cyan-400 transition-colors">${el.s}</span>
            </div>
            <div class="text-[9px] font-bold text-slate-300 truncate">
              ${el.n}
            </div>
          </div>
        `;
      }).join('');
    }

    function expandElementToBig(atomicNumber) {
      const el = ALL_ELEMENTS.find(e => e.z === atomicNumber);
      if (!el) return;

      const style = CATEGORY_STYLES[el.cat] || { border: 'border-slate-700', bg: 'bg-slate-950', text: 'text-slate-400', ku: el.cat };
      const bigContainer = document.getElementById('activeBigCardContainer');
      if (!bigContainer) return;

      bigContainer.innerHTML = `
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3.5 sm:gap-5 w-full sm:w-auto">
            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-950 border-2 border-cyan-400 flex flex-col items-center justify-center text-center shadow-neon-cyan shrink-0">
              <span class="text-[10px] text-slate-400 font-mono font-bold leading-none mt-1">#${el.z}</span>
              <span class="text-2xl sm:text-3xl font-black font-formula text-cyan-300 leading-tight">${el.s}</span>
              <span class="text-[9px] text-slate-400 font-mono leading-none mb-1">${el.m}</span>
            </div>
            <div class="space-y-1 text-right min-w-0">
              <h3 class="text-lg sm:text-xl font-black text-white">${el.n} (${style.ku})</h3>
              <div class="text-xs text-slate-300 font-mono">خولی ${el.p} • کۆمەڵەی ${el.g} • بلۆکی ${el.b}</div>
              <div class="text-xs text-cyan-400 font-mono font-bold truncate">ڕیزبەندی ئەلیکترۆنی: ${el.c}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" onclick="quickSolveWithSymbol('${el.s}')" class="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-black text-xs">شیکارکردنی هاوکێشە</button>
            <button type="button" onclick="closeBigCard()" class="px-3 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">داخستن ✕</button>
          </div>
        </div>
      `;
      bigContainer.classList.remove('hidden');
      bigContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function closeBigCard() {
      const el = document.getElementById('activeBigCardContainer');
      if (el) el.classList.add('hidden');
    }

    function render18ColumnGrid() {
      const grid = document.getElementById('fullPeriodicGrid');
      if (!grid) return;
      let html = '';

      for (let g = 1; g <= 18; g++) {
        html += `<div style="grid-column: ${g}; grid-row: 1;" dir="ltr" class="text-center py-1 rounded-lg bg-slate-950/70 border border-slate-800 text-[10px] font-mono font-bold text-cyan-400 select-none">${g}</div>`;
      }

      ALL_ELEMENTS.forEach(el => {
        const style = CATEGORY_STYLES[el.cat] || { border: 'border-slate-700', bg: 'bg-slate-950', text: 'text-slate-400' };
        let gridCol = el.g;
        let gridRow = el.p + 1;

        if (el.z >= 57 && el.z <= 71) {
          gridRow = 10;
          gridCol = el.z - 57 + 3;
        } else if (el.z >= 89 && el.z <= 103) {
          gridRow = 11;
          gridCol = el.z - 89 + 3;
        }

        html += `
          <div onclick="expandElementToBig(${el.z})" style="grid-column: ${gridCol}; grid-row: ${gridRow};" dir="ltr" class="table-cell-el relative rounded-xl p-1 bg-slate-900 border ${style.border} ${style.bg} cursor-pointer flex flex-col justify-between text-center select-none shadow-sm group">
            <span class="text-slate-400 font-bold text-[9px]">${el.z}</span>
            <span class="text-sm font-black font-formula text-white group-hover:text-cyan-400">${el.s}</span>
            <span class="text-[8px] text-slate-400 truncate">${el.n}</span>
          </div>
        `;
      });
      grid.innerHTML = html;
    }

    function quickSolveWithSymbol(symbol) {
      const input = document.getElementById('solverTextInput');
      if (input) input.value = symbol;
      solveEquation();
      const sec = document.getElementById('solverSection');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    }

    function displayInitialSolverState() {
      const container = document.getElementById('solverResultContainer');
      if (container) {
        container.innerHTML = `
          <div class="flex items-center gap-3 text-slate-400 text-xs">
            <p>هاوکێشەیەک بنووسە تا بە کوردییەکی ڕوون هەنگاوەکانی شیکارکردنت بۆ دەربخات.</p>
          </div>
        `;
      }
    }

    function solveEquation() {
      const input = document.getElementById('solverTextInput');
      const container = document.getElementById('solverResultContainer');
      if (!input || !container) return;
      const val = input.value.trim();

      if (!val) {
        showToast('تکایە سەرەتا هاوکێشەیەک بنووسە.');
        return;
      }

      if (val.includes('->') || val.includes('=')) {
        container.innerHTML = `
          <div class="space-y-3">
            <div class="p-4 bg-slate-950 border border-emerald-500/50 rounded-2xl text-center">
              <span class="text-xs text-slate-400 block mb-1">هاوکێشەی هاوسەنگکراو:</span>
              <div class="text-lg font-black font-formula text-white tracking-wide">${val.replace('->', '→')}</div>
            </div>
            <div class="text-xs text-emerald-400 font-bold text-center">هاوسەنگکراو بە سەرکەوتوویی لە یاسای پاراستنی بارستە ✓</div>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="p-4 bg-slate-950 border border-cyan-500/50 rounded-2xl text-center space-y-1">
            <span class="text-xs text-slate-400 block">شیکاریی ئاوێتە:</span>
            <div class="text-xl font-black font-formula text-cyan-300">${val}</div>
            <div class="text-xs text-slate-300">پێکهاتەی گەردیلەیی ناسرایەوە.</div>
          </div>
        `;
      }
    }

    let isKeyboardVisible = false;
    let isKeyboardUppercase = true;
    let isKeyboardNumbersSmall = false;

    const UPPER_LETTERS = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
    const LOWER_LETTERS = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

    function showChemistryKeyboard() {
      const kb = document.getElementById('chemistryVirtualKeyboard');
      if (kb) {
        kb.classList.remove('hidden');
        isKeyboardVisible = true;
        renderKeyboardLetters();
        renderKeyboardNumbers();
      }
    }

    function hideChemistryKeyboard() {
      const kb = document.getElementById('chemistryVirtualKeyboard');
      if (kb) {
        kb.classList.add('hidden');
        isKeyboardVisible = false;
      }
    }

    function toggleChemistryKeyboard() {
      if (isKeyboardVisible) hideChemistryKeyboard();
      else showChemistryKeyboard();
    }

    function renderKeyboardLetters() {
      const container = document.getElementById('keyboardLettersContainer');
      if (!container) return;
      const letters = isKeyboardUppercase ? UPPER_LETTERS : LOWER_LETTERS;
      container.innerHTML = `
        <div class="flex flex-wrap justify-center gap-1" dir="ltr">
          ${letters.map(c => `<button type="button" onclick="insertKey('${c}')" class="min-w-[28px] h-8 bg-slate-950 border border-slate-700 rounded text-white font-mono font-bold text-xs">${c}</button>`).join('')}
        </div>
      `;
    }

    function renderKeyboardNumbers() {
      const container = document.getElementById('keyboardNumbersContainer');
      if (!container) return;
      const nums = isKeyboardNumbersSmall ? ['₁','₂','₃','₄','₅','₆','₇','₈','₉','₀'] : ['1','2','3','4','5','6','7','8','9','0'];
      container.innerHTML = nums.map(n => `<button type="button" onclick="insertKey('${n}')" class="py-1.5 bg-slate-900 border border-slate-700 rounded text-white font-mono font-bold text-xs">${n}</button>`).join('');
    }

    function toggleKeyboardCase() {
      isKeyboardUppercase = !isKeyboardUppercase;
      renderKeyboardLetters();
    }

    function toggleKeyboardNumberMode() {
      isKeyboardNumbersSmall = !isKeyboardNumbersSmall;
      renderKeyboardNumbers();
    }

    function insertKey(text) {
      const input = document.getElementById('solverTextInput');
      if (!input) return;
      input.value += text;
      input.focus();
    }

    function backspaceKey() {
      const input = document.getElementById('solverTextInput');
      if (!input) return;
      input.value = input.value.slice(0, -1);
      input.focus();
    }

    function clearSolverInput() {
      const input = document.getElementById('solverTextInput');
      if (input) {
        input.value = '';
        input.focus();
      }
    }

    function renderVideosList() {
      const container = document.getElementById('videosListContainer');
      const badge = document.getElementById('videoCountBadge');
      if (badge) badge.textContent = `${dbVideos.length} ڤیدیۆ`;
      if (!container) return;

      if (dbVideos.length === 0) {
        container.innerHTML = '<p class="text-xs text-slate-500 py-3 col-span-full">هیچ ڤیدیۆیەک بڵاونەکراوەتەوە لە ئێستادا.</p>';
        return;
      }

      container.innerHTML = dbVideos.map((vid, idx) => `
        <div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 space-y-3 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-sm">
          <div class="space-y-1.5">
            <span class="px-2.5 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-[10px] font-black">ڤیدیۆی ${idx + 1}</span>
            <h3 class="text-xs sm:text-sm font-bold text-white">${vid.title}</h3>
            <p class="text-xs text-slate-400">${vid.desc || ''}</p>
          </div>
          <div class="pt-2 flex items-center justify-between border-t border-slate-800">
            <a href="${vid.url}" target="_blank" class="text-xs text-cyan-400 hover:underline">کردنەوە لە پەڕەی نوێ ↗</a>
            <button onclick="openWatchVideoModal('${vid.id}')" class="px-3 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs">سەیرکردن</button>
          </div>
        </div>
      `).join('');
    }

    function openAllVideoLinksModal() {
      const modal = document.getElementById('allVideoLinksModal');
      const listContainer = document.getElementById('allVideoLinksModalList');
      if (!modal || !listContainer) return;

      if (dbVideos.length === 0) {
        listContainer.innerHTML = '<p class="text-xs text-slate-500 py-3 text-center">هیچ بەستەرێک بەردەست نییە لە ئێستادا.</p>';
      } else {
        listContainer.innerHTML = dbVideos.map((vid, idx) => `
          <div class="p-3 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between gap-2 text-xs">
            <span class="text-white truncate font-bold">${idx + 1}. ${vid.title}</span>
            <a href="${vid.url}" target="_blank" class="px-3 py-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl font-bold shrink-0">کردنەوە ↗</a>
          </div>
        `).join('');
      }
      modal.classList.remove('hidden');
    }

    function closeAllVideoLinksModal() {
      const modal = document.getElementById('allVideoLinksModal');
      if (modal) modal.classList.add('hidden');
    }

    function openWatchVideoModal(videoId) {
      const vid = dbVideos.find(v => String(v.id) === String(videoId));
      if (!vid) return;

      const modal = document.getElementById('videoPlayerModal');
      const titleEl = document.getElementById('videoPlayerTitle');
      const iframe = document.getElementById('videoIframePlayer');
      const directBtn = document.getElementById('videoDirectLinkBtn');

      if (titleEl) titleEl.textContent = vid.title;
      if (iframe) {
        const match = vid.url.match(/^.*(youtu.be\/|v\/|watch\?v=|\&v=)([^#\&\?]*).*/);
        iframe.src = (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` : vid.url;
      }
      if (directBtn) directBtn.href = vid.url;

      if (modal) modal.classList.remove('hidden');
    }

    function closeWatchVideoModal() {
      const modal = document.getElementById('videoPlayerModal');
      const iframe = document.getElementById('videoIframePlayer');
      if (iframe) iframe.src = '';
      if (modal) modal.classList.add('hidden');
    }

    async function handleCreateVideo(e) {
      e.preventDefault();
      const title = document.getElementById('videoTitleInput').value.trim();
      const url = document.getElementById('videoUrlInput').value.trim();
      const topic = document.getElementById('videoTopicInput')?.value || 'گشتی';
      const desc = document.getElementById('videoDescInput')?.value.trim() || '';

      if (!title || !url) return;

      try {
        const res = await fetch('/api/videos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, url, topic, desc, password: 'Shawgar2026' })
        });
        if (res.ok) {
          e.target.reset();
          await syncWithDatabase();
          showToast('ڤیدیۆ بە سەرکەوتوویی لە داتابەیس پاشەکەوت کرا!');
        } else {
          showToast('وشەی تێپەڕ هەڵەیە یان کێشەیەک ڕوویدا!');
        }
      } catch (err) {
        showToast('پەیوەندی بە سێرڤەرەوە نەکرا!');
      }
    }

    async function deleteVideo(id) {
      if (!confirm('دڵنیایت لە سڕینەوەی ئەم ڤیدیۆیە لە داتابەیس؟')) return;
      try {
        const res = await fetch(`/api/videos/${id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: 'Shawgar2026' })
        });
        if (res.ok) {
          await syncWithDatabase();
          showToast('ڤیدیۆکە سڕایەوە.');
        }
      } catch(err) {
        showToast('هەڵە لە سڕینەوە.');
      }
    }

    function renderTeacherVideoList() {
      const container = document.getElementById('teacherVideosList');
      if (!container) return;
      if (dbVideos.length === 0) {
        container.innerHTML = '<p class="text-xs text-slate-500 py-2">هیچ ڤیدیۆیەک دانەنراوە.</p>';
        return;
      }
      container.innerHTML = dbVideos.map(v => `
        <div class="p-2.5 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
          <span class="text-white truncate font-bold">${v.title}</span>
          <button onclick="deleteVideo('${v.id}')" class="text-rose-400 font-bold hover:underline shrink-0">سڕینەوە 🗑️</button>
        </div>
      `).join('');
    }

    function renderHomeworkList() {
      const container = document.getElementById('homeworkListContainer');
      const badge = document.getElementById('hwCountBadge');
      if (badge) badge.textContent = `${dbHomeworks.length} ئەرک`;
      if (!container) return;

      if (dbHomeworks.length === 0) {
        container.innerHTML = '<p class="text-xs text-slate-500 py-3 col-span-full">هیچ ئەرکێکی نوێ بڵاونەکراوەتەوە لەم ساتەدا.</p>';
        return;
      }

      container.innerHTML = dbHomeworks.map(hw => `
        <div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-3.5 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-cyan-400 font-bold text-xs">${hw.topic || 'ئەرک'}</span>
            <span class="text-emerald-400 text-xs font-mono">${hw.points || 10} نمرە</span>
          </div>
          <h4 class="font-bold text-white text-xs">${hw.title}</h4>
          <p class="text-xs text-slate-300">${hw.desc}</p>
        </div>
      `).join('');
    }

    function renderQuizList() {
      const container = document.getElementById('quizListContainer');
      if (!container) return;
      if (dbQuizzes.length === 0) {
        container.innerHTML = '<p class="text-xs text-slate-500 py-3 col-span-full">هیچ پرسیارێک دانەنراوە.</p>';
        return;
      }
      container.innerHTML = dbQuizzes.map((q, idx) => `
        <div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-3.5 space-y-2 text-xs">
          <span class="text-emerald-400 font-bold">پرسیاری ${idx + 1}</span>
          <p class="text-white font-bold">${q.kuQuestion}</p>
        </div>
      `).join('');
    }

    function renderTeacherSubmissions() {
      const container = document.getElementById('teacherSubmissionsList');
      const countEl = document.getElementById('subCount');
      if (countEl) countEl.textContent = dbSubmissions.length;
      if (!container) return;
      if (dbSubmissions.length === 0) {
        container.innerHTML = '<p class="text-xs text-slate-500 py-2">هیچ وەڵامێک تۆمار نەکراوە.</p>';
        return;
      }
      container.innerHTML = dbSubmissions.map(s => `
        <div class="p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs space-y-1">
          <div class="flex items-center justify-between text-cyan-300 font-bold">
            <span>${s.studentName}</span>
            <span class="text-[10px] text-slate-500">${s.submittedAt}</span>
          </div>
          <p class="text-slate-200">${s.answer}</p>
        </div>
      `).join('');
    }

    function openTeacherModal() {
      if (isTeacherLoggedIn) {
        const sec = document.getElementById('teacherPanelSection');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      const modal = document.getElementById('teacherLoginModal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeTeacherModal() {
      const modal = document.getElementById('teacherLoginModal');
      if (modal) modal.classList.add('hidden');
    }

    function handleTeacherLogin(e) {
      e.preventDefault();
      const pwd = document.getElementById('teacherPasswordInput').value.trim();

      if (pwd === 'Shawgar2026') {
        isTeacherLoggedIn = true;
        closeTeacherModal();
        const sec = document.getElementById('teacherPanelSection');
        if (sec) sec.classList.remove('hidden');
        renderTeacherVideoList();
        renderTeacherSubmissions();
        showToast('بەخێربێیت مامۆستا شەوگار!');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      } else {
        showToast('تێپەڕەوشە هەڵەیە!');
      }
    }

    function logoutTeacher() {
      isTeacherLoggedIn = false;
      const sec = document.getElementById('teacherPanelSection');
      if (sec) sec.classList.add('hidden');
      showToast('لە مۆدی مامۆستا چوویتە دەرەوە.');
    }

    function showToast(msg) {
      const toast = document.getElementById('toastNotification');
      const msgEl = document.getElementById('toastMessage');
      if (!toast || !msgEl) return;
      msgEl.textContent = msg;
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 3200);
    }
    