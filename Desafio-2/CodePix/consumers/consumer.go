package main

import (
	"fmt"

	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
)

func main() {
	configMap := &ckafka.ConfigMap{
		"bootstrap.servers": "kafka:9092",
		"group.id":          "consumergroup",
		"auto.offset.reset": "earliest",
	}

	c, err := ckafka.NewConsumer(configMap)
	if err != nil {
		panic(err)
	}

	topics := []string{"teste"}
	c.SubscribeTopics(topics, nil)

	fmt.Println(" --------- Iniciando kafka ---------- ")

	for {
		msg, err := c.ReadMessage(-1)
		if err == nil {
			fmt.Println("Mensagem recebida com sucesso ", string(msg.Value))
		}
	}
}
