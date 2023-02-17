(ns first.app
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]))

;; define components using the `defnc` macro
(defnc greeting
  "A component which greets a user."
  [{:keys [name]}]
  ;; use helix.dom to create DOM elements
  (d/div "Hello, " (d/strong name) "!"))

(defnc clickMe []
  (d/button { :on-click #(js/alert "BOOO!!")} "Click Me!" )
  )

(doseq [val [ 2 3 4 5 6 7 8 9]
        :when(odd? val)
        ]
       
  
  ( prn val)
  )

(defnc first-app []
  (let [[state set-state] (hooks/use-state {:name "Helix User"})]
    (d/div
     (d/h1 "Welcome!")
     ($ clickMe )
      ;; create elements out of components
      ($ greeting {:name (:name state)})
      (d/input {:value (:name state)
                :on-change #(set-state assoc :name (.. % -target -value))}))) 
  )




;; const clickMe () => {<button onClick = {js/alert ("Boo!!!")} > Click me </button>}

;; start your app with your favorite React renderer
(defonce root (rdom/createRoot (js/document.getElementById "app")))
(.render root ($ first-app))