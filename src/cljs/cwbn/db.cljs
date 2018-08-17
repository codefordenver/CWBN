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
     :social-enterprise ["Food Bank",
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
                            "Lending Circles"]}
    :orgs
    [{:name "Rocky Mountain Microfinance Institute"
      :categories [:business-development, :cooperatives]
      :type "Non-Profit"
      :services "Microloans, Technical Assistance"
      :population "Entrepreneurs"}
     {:name "Rocky Mountain Farmers Union - Cooperative Development Center"
      :categories [:business-development]
      :type "Non-Profit"
      :services "Technical Assistance for Coop Development"
      :population "Urban areas"
      :area "Denver"
      :website "https://rmfu.org"
      :contact-name "Bill Stevenson"
      :email "bill.stevenson@rmfu.org"}
     {:name "Rocky Mountain Employee Ownership Center"
      :categories [:business-development]
      :type "Non-Profit"
      :services "Technical Assistance"
      :population "Business seeking to transition into an employee-owned business model"
      :area "Colorado"
      :website "https://rmeoc.org"
      :contact-name "Halisi Vinson"
      :email "halisi@rmeoc.org"}
     {:name "Mi Casa Resource Center"
      :categories [:business-development]
      :type "Non-Profit"
      :services "Business Technical Assistance, Lending"
      :population "Entrepreneurs, women, Latinos"
      :area "Denver Metro"
      :website "https://micasaresourcecenter.org"
      :contact-name "Elena Vasconez"
      :email "evasconez@MiCasaResourceCenter.org"
      :phone "(303) 573-1302"}
     {:name "Community Enterprise Development Services (CEDS)"
      :categories [:business-development]
      :type "Non-Profit"
      :services "Technical Assistance, Microloans, IDAs"
      :population "Refugees, entrepreneurs, consumers"
      :area "Metro Area"
      :website "https://scorecard.prosperitynow.org/2016"
      :contact-name "Bishal Kafle"
      :email "bkafle@cedsfinance.org"
      :phone "(303) 569-8165"}
     {:name "Colorado Lending Source"
      :categories [:business-development]
      :type "Non-Profit"
      :services "Business Lending"}
     {:name "Colorado Enterprise Fund"
      :categories [:business-development]
      :type "Non-Profit"
      :services "Business Lending"}
     {:name "Accion"
      :categories [:business-development]
      :type "Non-Profit"
      :services "Business Technical Assistance, Lending"}]})
