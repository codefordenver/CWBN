(ns cwbn.pages.about)

(defn about-page []
  [:div
    [:h1.tc.f2.fw6.mt4.mb3 "Community Wealth Building"]
    [:div.tc.i
      [:p "Metro Denver's Economic Prosperity Network"]
    ]
    [:div.tc.ma1.mt4.ph3
      [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pulvinar ex. Maecenas hendrerit gravida purus. Nulla urna mi, egestas ut augue sit amet, rhoncus luctus quam. Curabitur eu convallis metus. Sed sapien magna, ultrices in orci ac, sollicitudin varius neque. Donec eget quam eu sem gravida accumsan. Duis ut egestas justo.
Ut at nibh elementum, volutpat purus vel, varius felis. Aliquam gravida nunc at aliquam gravida. Fusce ut metus magna. Aliquam eget felis sollicitudin, posuere massa nec, imperdiet metus. Nunc porttitor ipsum ac orci bibendum egestas. Cras eget elit posuere, facilisis ante vel, cursus risus. Nulla eu libero a tortor convallis efficitur. Duis ac dictum ipsum."]
    ]
    [:div.tc.ma1.mt4.ph3]    
    [:div.tc.ma1.mt5.ph3
      [:p.mb1 "Contact us"]
      [:a {:href "mailto:connect@communitywealthbuilding.org"} "connect@communitywealthbuilding.org"]
    ]    
  ])
