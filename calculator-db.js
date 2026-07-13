/**
 * UCD COST OF ATTENDANCE & FUNDING PLANNER - STATIC DATABASE
 * Update this file once a year (typically April/May) to maintain accuracy.
 * Base currency for institutional charges is EUR (€).
 * Base currency for US Federal Loan estimates and other outside funding is USD ($).
 */

const UCD_FINANCIAL_DATABASE = {
    metadata: {
        lastUpdated: "June 2026",
        academicYear: "2027/2028",
        livingCostsLastUpdated: "April 2026",
        federalLoanRulesLastUpdated: "July 2026",
        // Flat conversion rate used to keep estimates stable for prospective students
        institutionalExchangeRate: 1.16 // €1.00 EUR = $1.16 USD
    },

    // Non-EU International Tuition Rates (Estimated Averages per Academic Year)
    tuitionRatesEUR: {
        undergraduate: {
            "Arts & Humanities": 22600,
            "Business": 23170,
            "Science & Engineering": 29500,
            "Veterinary Medicine": 38000,
            "Medicine": 63890
        },
        graduate: {
            "Classroom - Arts & Humanities, Social Sciences & Law": 22600,
            "Business (Smurfit School)": 23870,
            "Laboratory - Agriculture, Science & Engineering": 29500,
            "Veterinary Medicine (Graduate Entry)": 44880,
            "Medicine (Graduate Entry)": 66360
        }
    },

    // Dublin living-cost estimates from Living Costs.xlsx.
    // Monthly costs are shown as Lowest / Median / High. One-time costs are added once per academic year.
    costOfLivingEUR: {
        durationMonths: {
            undergraduate: 9, // Autumn & Spring trimesters
            graduate: 12      // Full calendar year for Masters research/dissertations
        },
        scenarios: {
            lowest: "Lowest",
            median: "Median",
            high: "High"
        },
        monthlyItems: [
            {
                key: "accommodation",
                label: "Accommodation",
                lowest: 830,
                median: 1200,
                high: 2250
            },
            {
                key: "utilitiesHeatingElectricity",
                label: "Utilities (heating and electricity)",
                lowest: 85,
                median: 135,
                high: 205
            },
            {
                key: "food",
                label: "Food",
                lowest: 350,
                median: 490,
                high: 670
            },
            {
                key: "localTravelLeapCard",
                label: "Local Travel (Leap Card)",
                lowest: 60,
                median: 75,
                high: 120
            },
            {
                key: "booksAndCopying",
                label: "Books and Copying",
                lowest: 100,
                median: 120,
                high: 190
            },
            {
                key: "clothingAndHygiene",
                label: "Clothing and Hygiene",
                lowest: 100,
                median: 150,
                high: 200
            },
            {
                key: "internetAndMobile",
                label: "Internet and Mobile",
                lowest: 30,
                median: 45,
                high: 50
            },
            {
                key: "personalSocial",
                label: "Personal/Social",
                lowest: 80,
                median: 120,
                high: 200
            },
            {
                key: "miscellaneous",
                label: "Miscellaneous e.g., medical, unforeseen expenses, tourism, etc.",
                lowest: 100,
                median: 110,
                high: 150
            }
        ],
        monthlyTotals: {
            lowest: 1735,
            median: 2445,
            high: 4035
        },
        oneTimeItems: [
            {
                key: "irishResidencePermit",
                label: "Irish Residence Permit (Non-EU/EEA/UK/Swiss)",
                cost: 300
            },
            {
                key: "healthInsurance",
                label: "Health Insurance",
                cost: 690
            },
            {
                key: "beddingCookingUtensils",
                label: "Bedding & Cooking Utensils",
                cost: 200
            }
        ],
        oneTimeTotal: 1190
    },


    // Annual federal loan limits used for first-year, first-time borrower estimates.
    // The calculator intentionally does not calculate individual aggregate or lifetime limits.
    // UCD must confirm official eligibility after receiving the student's FAFSA information.
    federalLoanRules: {
        effectiveDate: "July 1, 2026",
        undergraduate: {
            dependent: {
                annualByYear: {
                    1: { subsidized: 3500, unsubsidized: 2000 }
                }
            },
            independent: {
                annualByYear: {
                    1: { subsidized: 3500, unsubsidized: 6000 }
                }
            },
            parentPlus: {
                annualLimitUSD: 20000
            }
        },
        graduate: {
            standardGraduate: {
                annualUnsubsidizedLimitUSD: 20500,
                label: "Graduate program"
            },
            gradPlusNewBorrowerAvailable: false
        }
    },

    // Program Compliance and Ineligibility Rules for US Title IV Federal Aid
    complianceExclusions: {
        ineligibleKeywords: [
            "online", "distance", "nursing", "diploma", "certificate", "part-time"
        ],
        unsupportedPrograms: [
            "BSc Nursing",
            "MSc Nursing",
            "Professional Diploma in Education",
            "Online MSc in Data Analytics"
        ],
        warningMessage: "The US Department of Education prohibits Federal Title IV Aid from being utilized for online/distance learning, certificate programs, or nursing programs at international institutions. Federal loans cannot be certified for this track."
    }
};

// Exporting the module so it can be used in your application scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UCD_FINANCIAL_DATABASE;
}
