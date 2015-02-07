(ns modern-cljs.core
  (:use compojure.core)
  (:require [compojure.handler :as handler])
  (:require [compojure.route :as route]))

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

;; defroutos macro defines a function that chains individual route
;; functions together. The request map is passed to each function in
;; turn, until a non-nil response is returned
(defroutes app-routes
  ; to serve document route address
  (GET "/" [] "<p>Hello from compojure</p>")
  ; to serve static pages saved in resources/public directory
  (route/resources "/")
  ; if page is not found
  (route/not-found "Page not found"))

;; site funnction creates a handler suitable for a standard website,
;; adding a bunch of standard ring middleware to app-route
(def handler
  (handler/site app-routes))
