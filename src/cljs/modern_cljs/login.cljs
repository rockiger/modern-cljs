(ns modern-cljs.login
  (:use [domina :only [by-id value]]))

;; define the function to be attacke to form submission event
(defn validate-form []
  ;; get meil and password element
  (let [email (by-id "email")
        password (by-id "password")]
    ;; get mail and passwor value using (value el)
    (if (and (> (count (value email)) 0)
             (> (count (value password)) 0))
      true
      (do (js/alert "Please, complete the form!")
          false))))

;; define the function to attach validate-form to onsubmit
;; of the form
(defn init []
  ;; verify that js/document exists and that it has a getElementById
  ;; property
  (if (and js/document
           (.-getElementById js/document))
     ;; get loginForm by element id and set its onsubmit probpery to
     ;; our vlidate-form function
     (let [login-form (.getElementById js/document "loginForm")]
      (set! (.-onsubmit login-form) validate-form))))

(defn bla []
  (.log js/console "Bla braenrai anetrianet"))

;;initialize the page
(set! (.-onload js/window) init)
