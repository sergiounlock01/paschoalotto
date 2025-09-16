"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MessageCircle, Phone, Shield, Users, Clock, CheckCircle, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const whatsappNumber = "5551942695"
const whatsappMessage = "Atendimento%20"
const whatsappUrl = `https://wa.me/551151942695?text=Atendimento.`

export default function PaschoalottoSite() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/paschoalotto-logo.jpeg"
              alt="Paschoalotto Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold">Paschoalotto</h1>
              <p className="text-blue-100">Assessoria Especializada</p>
            </div>
          </div>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Fale Conosco</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Resolva suas Dívidas com
                <span className="text-yellow-300"> Segurança Total</span>
              </h2>
              <p className="text-xl text-blue-100">
                Assessoria especializada para renegociação de dívidas Paschoalotto. Suporte completo e condições
                especiais para você quitar suas pendências.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Iniciar Negociação</span>
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg"
                >
                  Consultar Dívidas
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/paschoalotto-fachada.jpeg"
                alt="Fachada Paschoalotto"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços de Assessoria</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos suporte completo para resolver suas pendências financeiras com a Paschoalotto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Renegociação Segura</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Processo 100% seguro e oficial para renegociar suas dívidas com condições especiais
                </CardDescription>
                <Button onClick={handleWhatsAppClick} className="mt-4 bg-blue-600 hover:bg-blue-700">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Atendimento Especializado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Equipe treinada e especializada para encontrar a melhor solução para seu caso
                </CardDescription>
                <Button onClick={handleWhatsAppClick} className="mt-4 bg-green-600 hover:bg-green-700">
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Atendimento Rápido</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Resolução ágil e eficiente. Não perca tempo, regularize sua situação hoje mesmo
                </CardDescription>
                <Button onClick={handleWhatsAppClick} className="mt-4 bg-orange-600 hover:bg-orange-700">
                  Atendimento Imediato
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/paschoalotto-equipe.jpeg"
                alt="Equipe Paschoalotto"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Equipe Especializada e Preparada</h3>
              <p className="text-lg text-gray-600">
                Nossa equipe é composta por profissionais altamente qualificados e treinados especificamente para
                atender clientes com pendências na Paschoalotto.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Atendimento personalizado e humanizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Conhecimento profundo dos processos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Foco na melhor solução para você</span>
                </div>
              </div>
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                Falar com Nossa Equipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Vantagens da Nossa Assessoria</h3>
            <p className="text-xl text-gray-600">Por que escolher nossos serviços para resolver suas pendências</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Star className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Condições Especiais</h4>
              <p className="text-gray-600 text-sm">Descontos exclusivos e parcelamentos facilitados</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Shield className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Total Segurança</h4>
              <p className="text-gray-600 text-sm">Processo oficial e transparente</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Clock className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Rapidez</h4>
              <p className="text-gray-600 text-sm">Resolução em poucos minutos</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Suporte Completo</h4>
              <p className="text-gray-600 text-sm">Acompanhamento até a quitação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Debt Renegotiation Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Dívidas em Atraso? Resolva Agora!</h3>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Não deixe suas dívidas crescerem. Nossa assessoria especializada oferece as melhores condições para
              renegociar suas pendências com a Paschoalotto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold">Renegociação de Dívidas Paschoalotto</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h5 className="font-semibold">Descontos de até 90%</h5>
                    <p className="text-red-100">Condições especiais para quitação à vista</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h5 className="font-semibold">Parcelamento Facilitado</h5>
                    <p className="text-red-100">Parcelas que cabem no seu orçamento</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h5 className="font-semibold">Retirada do Nome dos Órgãos</h5>
                    <p className="text-red-100">Limpe seu nome rapidamente</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h5 className="font-semibold">Atendimento Personalizado</h5>
                    <p className="text-red-100">Solução sob medida para seu caso</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
              <h4 className="text-2xl font-bold text-center mb-6 text-red-600">Consulte Suas Dívidas Agora</h4>
              <div className="space-y-4">
                <p className="text-center text-gray-600">
                  Entre em contato conosco pelo WhatsApp e descubra as melhores condições para quitar suas pendências.
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Consultar Dívidas no WhatsApp</span>
                </Button>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Atendimento de segunda a sexta, das 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Não Espere Mais! Resolva Suas Dívidas Hoje</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a encontrar a melhor solução para suas pendências com total
            suporte e segurança.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-12 py-4 text-lg flex items-center space-x-3 mx-auto"
          >
            <MessageCircle className="w-7 h-7" />
            <span>Falar com Especialista Agora</span>
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Paschoalotto Assessoria</h4>
              <p className="text-blue-100">Especialistas em renegociação de dívidas com total suporte e segurança.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>(13) 9 3628-3620</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Disponível</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Horário de Atendimento</h4>
              <p className="text-blue-100">
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
          <div className="border-t border-blue-500 mt-8 pt-8 text-center">
            <p className="text-blue-100">© 2024 Paschoalotto Assessoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="lg"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  )
}
