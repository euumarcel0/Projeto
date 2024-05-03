// ----------------------------------------------------LOGIN----------------------------------------------------------- //

variable "access_key" {
  description = "access_key AWS"
  default     = "dadad"
}

variable "secret_key" {
  description = "secret_key AWS"
  default     = "dadada"
}

variable "token" {
  description = "Token AWS"
  default     = "adad"
}

// ----------------------------------------------------VARIABLES----------------------------------------------------------- //
variable "nome_vpc" {
  description = "Descricao da variavel nome_vpc"
  default     = "vpcmarcelodecalcinha"
}
variable "endereco_vpc" {
  description = "Descricao da variavel endereco_vpc"
  default     = "10.0.0.0/16"
}
variable "nome_subrede_publica_aws" {
  description = "Descricao da variavel nome_subrede_publica_aws"
  default     = "pubs"
}
variable "endereco_subrede_publica_aws" {
  description = "Descricao da variavel endereco_subrede_publica_aws"
  default     = "172.16.1.0/24"
}
variable "nome_subrede_privada_vpc" {
  description = "Descricao da variavel nome_subrede_privada_vpc"
  default     = "priv"
}
variable "endereco_subrede_privada_vpc" {
  description = "Descricao da variavel endereco_subrede_privada_vpc"
  default     = "172.16.3.0/24"
}
variable "nome_gateway" {
  description = "Descricao da variavel nome_gateway"
  default     = "jnnnono"
}
variable "nome_tabela_rotas" {
  description = "Descricao da variavel nome_tabela_rotas"
  default     = "dada"
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
  default     = "MaquinaLinux"
}
variable "nome_maquina_virtual_windows_aws" {
  description = "Descricao da variavel nome_maquina_virtual_windows_aws"
  default     = "MaquinaWindows"
}
variable "key_name" {
  description = "Chave da ec2"
  default     = "marcelo"
}
variable "nome_load_balancer_aws" {
  description = "Descricao da variavel nome_load_balancer_aws"
  default     = "sla"
}
