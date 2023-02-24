(ns first.todo
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]))

(def ^:private todos ["buy butts"
            "kick butts"
            "spank butts"
            "massage butts"])

(defnc ^:private list-item [{:keys [todo]}]
  (d/li  todo))

(defnc ^:private todo-list [{:keys [items]}]
  (d/ul
   (for [todo items]
     ($ list-item {:key todo :todo todo}))))

(defn ^:private add-todo [set-todos-state event]
  (.preventDefault event)
  (set-todos-state 
   (fn [todos-state]
     (conj todos-state
           (.. event 
               -target 
               -content 
               -value)))))

(defnc todo-list-app []
  (let [[todos-state set-todos-state] (hooks/use-state todos)]
    (def t todos)
    (d/div
     (d/h1 "TODOS")
     (d/form {:on-submit (partial add-todo set-todos-state)}
             (d/input {:type "text" :name "content"})
             (d/button "add todo"))
     ($ todo-list {:items todos-state}))))



(comment
  
  (defn add [a b c] (+ a b c))

  (add 1 2 1)

  (def add-to-1-and-2 (partial add 1 2))

  (add-to-1-and-2 3)

  (def add-to-one (partial add 1))

  (add-to-one 4)


  (->> [1 2 43]
       (map inc)
       (map (partial )))



  (let [input (js/document.querySelector "input[name=content]")]

    (doseq [new-todo ["yksi" "kaksi" "kolme"]]
      (js/setTimeout (fn []
                       (set! (.-value input) new-todo) 
                       (.click (js/document.querySelector "button")))
                     1000)))
  )