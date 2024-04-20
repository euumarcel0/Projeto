# ----------------------------------------------------AZURE-----------------------------------------------------------#

variable "nome_grupo_recursos" {
  description = "Descricao da variavel nome_grupo_recursos"
  default     = ""
}
variable "regiao" {
  description = "Descricao da variavel regiao"
  default     = ""
}
variable "nome_conta_armazenamento" {
  description = "Descricao da variavel nome_conta_armazenamento"
  default     = ""
}
variable "nome_vnet" {
  description = "Descricao da variavel nome_vnet"
  default     = "Nome da VNET"
}
variable "endereco_vnet" {
  description = "Descricao da variavel endereco_vnet"
  default     = ["Endereco da VNET"]
}
variable "nome_subrede_publica" {
  description = "Descricao da variavel nome_subrede_publica"
  default     = "publicasla"
}
variable "endereco_subrede_publica" {
  description = "Descricao da variavel endereco_subrede_publica"
  default     = ["172.16.1.0/24"]
}
variable "nome_subrede_privada" {
  description = "Descricao da variavel nome_subrede_privada"
  default     = "privada"
}
variable "endereco_subrede_privada" {
  description = "Descricao da variavel endereco_subrede_privada"
  default     = ["172.16.2.0/24"]
}
variable "nome_grupo_seguranca_linux" {
  description = "Descricao da variavel nome_grupo_seguranca_linux"
  default     = "gp_linux"
}
variable "nome_grupo_seguranca_windows" {
  description = "Descricao da variavel nome_grupo_seguranca_windows"
  default     = "gp_windows"
}
variable "nome_interface_ip_linux" {
  description = "Descricao da variavel nome_interface_ip_linux"
  default     = "ip_linux"
}
variable "nome_interface_ip_windows" {
  description = "Descricao da variavel nome_interface_ip_windows"
  default     = "ip_windows"
}
variable "nome_maquina_virtual_linux" {
  description = "Descricao da variavel nome_maquina_virtual_linux"
  default     = "mquinalinux"
}
variable "nome_usuario_linux" {
  description = "Descricao da variavel nome_usuario_linux"
  default     = "linux"
}
variable "senha_usuario_linux" {
  description = "Descricao da variavel senha_usuario_linux"
  default     = "Senai@134@134"
}
variable "nome_maquina_virtual_windows" {
  description = "Descricao da variavel nome_maquina_virtual_windows"
  default     = "maquinawindows"
}
variable "nome_usuario_windows" {
  description = "Descricao da variavel nome_usuario_windows"
  default     = "windows"
}
variable "senha_usuario_windows" {
  description = "Descricao da variavel senha_usuario_windows"
  default     = "Senai@134@134"
}
variable "nome_load_balancer" {
  description = "Descricao da variavel nome_load_balancer"
  default     = "loadbalancerapi"
}




