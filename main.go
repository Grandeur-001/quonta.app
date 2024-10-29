

package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type User struct {
	Name string `json:"name"`
	Email string `json:"email"`
}

func main() {
	http.HandleFunc("/users", getUsers)
	http.listenAndServe(":5501", nil)
}

func getUsers(w http.ResponseWriter, r *http.Request){
	users := []User{{Name: "John", Email: "john@example.com"}}
	json.NewEncoder(W).Encode(users)
}