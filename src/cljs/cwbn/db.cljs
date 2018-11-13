(ns cwbn.db)

(def default-db
  {:active-page    :home
   :search-results []
   :organizations  [],
   :category-meta-data
    {:financial-investment
     {:label "Financial Investment",
      :image "financial.png",
      :slug "financial-investment"},
     :cooperatives
     {:label "Cooperatives",
      :image "cooperatives.png",
      :slug "cooperatives"},
     :business-development
     {:label "Business Development",
      :image "business.png",
      :slug "business-development"},
     :housing
     {:label "Housing",
      :image "housing.png",
      :slug "housing"},
     :advocacy
     {:label "Advocacy",
      :image "advocacy.png",
      :slug "advocacy"},
     :anchor-institution
     {:label "Anchor Institution",
      :image "anchor.png",
      :slug "anchor-institution"},
     :organizing
     {:label "Organizing",
      :image "organizing.png",
      :slug "organizing"},
     :workforce-development
     {:label "Workforce Development",
      :image "workforce.png",
      :slug "workforce-development"},
     :education
     {:label "Education",
      :image "education.png",
      :slug "education"},
     :social-enterprise
     {:label "Social Enterprise",
      :image "social.png",
      :slug "social-enterprise"}},
   :category-order
   [:financial-investment
    :cooperatives
    :business-development
    :housing
    :advocacy
    :anchor-institution
    :organizing
    :workforce-development
    :education
    :social-enterprise]})
