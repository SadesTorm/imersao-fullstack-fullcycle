package model
//desafio Aula 01
import (
	
	"time"
	"github.com/asaskevich/govaLidator"
	uuid "github.com/satori/go.uuid"
		
)



type User struct{
	Base 				`valid:"required"`
	Email 	string		`json: "email" valid: "notnull"`
	Name 	string		`json: "name" valid: "notnull"`

}
// criando metodod

func (user *User) isValid() error {

	_, err := govalidator.ValidateStruct(user)
	if(err != nil){
		return err
	}

	return nil

}

//funcao
func NewUser(email string, name string) (*User, error){
	user := User{
		Email: email,
		Name: name,
	}

	user.ID = uuid.NewV4().String()
	user.CreatedAt = time.Now()

	err:= user.isValid()
	if(err != nil){
		return nil, err
	}

	return &user, nil
}