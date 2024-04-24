// ----------------------------------------------------LOGIN----------------------------------------------------------- //

variable "access_key" {
  description = "access_key AWS"
  default     = "sla"
}

variable "secret_key" {
  description = "secret_key AWS"
  default     = "sla"
}

variable "token" {
  description = "Token AWS"
  default     = "sla"
}

// ----------------------------------------------------VARIABLES----------------------------------------------------------- //
variable "nome_vpc" {
  description = "Descricao da variavel nome_vpc"
  default     = "bacana"
}
variable "endereco_vpc" {
  description = "Descricao da variavel endereco_vpc"
  default     = "10.0.0.0/16"
}
variable "nome_subrede_publica_aws" {
  description = "Descricao da variavel nome_subrede_publica_aws"
  default     = "pub"
}
variable "endereco_subrede_publica_aws" {
  description = "Descricao da variavel endereco_subrede_publica_aws"
  default     = "172.16.0.0/24"
}
variable "nome_subrede_privada_vpc" {
  description = "Descricao da variavel nome_subrede_privada_vpc"
  default     = "priv"
}
variable "endereco_subrede_privada_vpc" {
  description = "Descricao da variavel endereco_subrede_privada_vpc"
  default     = "172.16.1.0/24"
}
variable "nome_gateway" {
  description = "Descricao da variavel nome_gateway"
  default     = "gateway"
}
variable "nome_tabela_rotas" {
  description = "Descricao da variavel nome_tabela_rotas"
  default     = "tabela"
}
variable "nome_grupo_seguranca_linux_aws" {
  description = "Descricao da variavel nome_grupo_seguranca_linux_aws"
  default     = "sgwindows"
}
variable "descriptions_sg_linux" {
  description = "SGLINUX"
  default     = "windowslindao"
}
variable "nome_grupo_seguranca_windows_aws" {
  description = "Descricao da variavel nome_grupo_seguranca_windows_aws"
  default     = "stas"
}
variable "descriptions_sg_windows" {
  description = "SGWINDOWS"
  default     = "sg_windows"
}
variable "nome_maquina_virtual_linux_aws" {
  description = "Descricao da variavel nome_maquina_virtual_linux_aws"
  default     = "mq"
}
variable "nome_usuario_linux_aws" {
  description = "Descricao da variavel nome_usuario_linux_aws"
  default     = "windows"
}
variable "senha_usuario_linux_aws" {
  description = "Descricao da variavel senha_usuario_linux_aws"
  default     = "Senai@134@134"
}
variable "nome_maquina_virtual_windows_aws" {
  description = "Descricao da variavel nome_maquina_virtual_windows_aws"
  default     = "mq"
}
variable "nome_usuario_windows_aws" {
  description = "Descricao da variavel nome_usuario_windows_aws"
  default     = "windows"
}
variable "senha_usuario_windows_aws" {
  description = "Descricao da variavel senha_usuario_windows_aws"
  default     = "Senai@134@134"
}
variable "nome_load_balancer_aws" {
  description = "Descricao da variavel nome_load_balancer_aws"
  default     = "string"
}
