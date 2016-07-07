(ns figwheel.connect (:require [figwheel.client] [grid.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/grid.core.on-js-reload (apply js/grid.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'grid.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

