(ns first.app
  (:require [first.todo :as todo]
            [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]))

(defnc first-app []
($ todo/todo-list-app))

;; can be declare before defined
(declare alert-cati)

(defn alert-cati [] (js/alert "CATIII"))

(defonce root (rdom/createRoot (js/document.getElementById "app")))
(.render root ($ first-app))