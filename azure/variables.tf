# ----------------------------------------------------AZURE-----------------------------------------------------------#

variable "nome_grupo_recursos" {
  description = "Descricao da variavel nome_grupo_recursos"
  default     = "MarceloZIca"
}
variable "regiao" {
  description = "Descricao da variavel regiao"
  default     = "East US"
}
variable "nome_conta_armazenamento" {
  description = "Descricao da variavel nome_conta_armazenamento"
  default     = "eusouzicameudeus"
}
variable "nome_vnet" {
  description = "Descricao da variavel nome_vnet"
  default     = "SLa"
}
variable "endereco_vnet" {
  description = "Descricao da variavel endereco_vnet"
  default     = ["172.16.0.0/16"]
}
variable "nome_subrede_publica" {
  description = "Descricao da variavel nome_subrede_publica"
  default     = "pubs"
}
variable "endereco_subrede_publica" {
  description = "Descricao da variavel endereco_subrede_publica"
  default     = ["172.16.1.0/24"]
}
variable "nome_subrede_privada" {
  description = "Descricao da variavel nome_subrede_privada"
  default     = "priv"
}
variable "endereco_subrede_privada" {
  description = "Descricao da variavel endereco_subrede_privada"
  default     = ["172.16.3.0/24"]
}
variable "nome_grupo_seguranca_linux" {
  description = "Descricao da variavel nome_grupo_seguranca_linux"
  default     = "gplinux"
}
variable "nome_grupo_seguranca_windows" {
  description = "Descricao da variavel nome_grupo_seguranca_windows"
  default     = ""
}
variable "nome_interface_ip_linux" {
  description = "Descricao da variavel nome_interface_ip_linux"
  default     = "ip_linux"
}
variable "nome_interface_ip_windows" {
  description = "Descricao da variavel nome_interface_ip_windows"
  default     = "ipwindows"
}
variable "nome_maquina_virtual_linux" {
  description = "Descricao da variavel nome_maquina_virtual_linux"
  default     = "MaquinaLinux"
}
variable "nome_usuario_linux" {
  description = "Descricao da variavel nome_usuario_linux"
  default     = "marcelo"
}
variable "senha_usuario_linux" {
  description = "Descricao da variavel senha_usuario_linux"
  default     = "Senai@134@134"
}
variable "nome_maquina_virtual_windows" {
  description = "Descricao da variavel nome_maquina_virtual_windows"
  default     = "MaquinaWindows"
}
variable "nome_usuario_windows" {
  description = "Descricao da variavel nome_usuario_windows"
  default     = "Marcelo"
}
variable "senha_usuario_windows" {
  description = "Descricao da variavel senha_usuario_windows"
  default     = "Senai#@134@134"
}
variable "nome_load_balancer" {
  description = "Descricao da variavel nome_load_balancer"
  default     = "sla"
}




