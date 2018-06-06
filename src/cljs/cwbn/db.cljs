(ns cwbn.db)

(def default-db
  {:active-page :home
   :services-by-category
    {:business-development ["Pre-Idea",
                            "Business Plan",
                            "Launch",
                            "Support",
                            "Growth",
                            "Business Exit",
                            "Business Lending"]
     :cooperatives ["Principles Education/Pre-Idea",
                    "Business Plan",
                    "Launch",
                    "Business Support",
                    "Legal Support",
                    "Growth",
                    "Cooperative Lending"]
     :housing ["Affordable Housing",
               "Community Land Trusts",
               "Down-Payment Assistance"],
     :workforce-development ["Skill Development",
                             "Apprenticeship",
                             "On-the-job Training"]
     :organizing ["Economic Justice",
                  "Education",
                  "Environmental Justice",
                  "Food Justice",
                  "Health Justice",
                  "Immigration",
                  "Labor",
                  "Racial Justice"]
     :advocacy ["Advocacy",
                "Policy"]
     :education ["Arts",
                 "Computer Classes",
                 "Financial Education",
                 "GED Classes",
                 "Youth Development",
                 "Citizenship Classes"]
     :direct-service ["Food Bank",
                      "Healthy Food Access",
                      "Shared Space",
                      "Transit/Transportation",
                      "Volunteer Service",
                      "Health Care"]
     :anchor-institution ["Local Hire Program",
                          "Local Procurement",
                          "Local Investment"]
     :financial-investment ["Micro-Loans",
                            "Capital Investment",
                            "Individual Development Accounts",
                            "Community Loans",
                            "Lending Circles"]}})
