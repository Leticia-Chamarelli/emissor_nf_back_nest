-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: nfs_admin_nest
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `atividades`
--

DROP TABLE IF EXISTS `atividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atividades` (
  `id` char(36) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `codigo` int NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atividades`
--

LOCK TABLES `atividades` WRITE;
/*!40000 ALTER TABLE `atividades` DISABLE KEYS */;
INSERT INTO `atividades` VALUES ('5aa92795-5da7-47a6-9b32-b19cc4e80bd2','Reparo de computadores e periféricos',2,'2023-11-07 18:53:37.109615','2023-11-07 18:53:37.109615',NULL);
/*!40000 ALTER TABLE `atividades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresas` (
  `id` char(36) NOT NULL,
  `apelido_empresa` varchar(255) NOT NULL,
  `tipo_pessoa_id` char(36) NOT NULL,
  `cpf_cnpj` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ccm` varchar(255) NOT NULL,
  `razao_social` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `tipo_logradouro_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `logradouro` varchar(255) NOT NULL,
  `numero` int NOT NULL,
  `cep` int NOT NULL,
  `complemento` varchar(255) NOT NULL,
  `telefone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) NOT NULL,
  `endereco_exterior` varchar(255) NOT NULL,
  `municipios_id` char(36) NOT NULL,
  `tipo_bairro_id` char(36) NOT NULL,
  `atividade_id` char(36) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES `empresas` WRITE;
/*!40000 ALTER TABLE `empresas` DISABLE KEYS */;
INSERT INTO `empresas` VALUES ('78969422-6864-11ee-8c99-0242ac120002','LRC Software','98994ea6-67a4-11ee-8c99-0242ac120002','9475639293859','123','LRC ','Bairro do Amor','ca429403-4263-4e8b-91a3-7fa3dbcbf89a','Love',15,18887937,'Não possui','(89) 09878-6547','lrc@teste.com','Não possui','ba472200-8748-4465-83cd-d33ee86dc2c8','24512c85-e356-42cf-a619-06c6188238c2','8e8d02df-863a-4ee3-8046-6658fe1e4d82','2023-10-11 15:34:57.669917','2023-10-11 15:34:57.669917',NULL),('7f8f216f-d1df-4c40-9bfc-820ff8724317','Empresa das Rosas','98994ea6-67a4-11ee-8c99-0242ac120002','67918891000130','0942743','Empresa das Rosas Eireli','Bairro das Flores','ca429403-4263-4e8b-91a3-7fa3dbcbf89a','Primaveras',123,12345766,'Bloco A','(99) 99999-9999','teste@gmail.com','163 E 32ND ST NEW YORK NY 10016-6009 USA','ba472200-8748-4465-83cd-d33ee86dc2c8','24512c85-e356-42cf-a619-06c6188238c2','8e8d02df-863a-4ee3-8046-6658fe1e4d82','2023-10-11 15:30:51.406863','2023-10-11 15:41:44.000000',NULL),('f4ba01f6-6864-11ee-8c99-0242ac120002','BM Computadores','98994ea6-67a4-11ee-8c99-0242ac120002','123596780947','987','Computadores BM','Bairro da Tecnologia','ca429403-4263-4e8b-91a3-7fa3dbcbf89a','Tecnologia',986,12886348,'Fundos','(78) 98765-3678','bm@outlook.com','378 BALTIC ST BROOKLYN NY 11201-6594 USA','ba472200-8748-4465-83cd-d33ee86dc2c8','24512c85-e356-42cf-a619-06c6188238c2','8e8d02df-863a-4ee3-8046-6658fe1e4d82','2023-10-11 15:37:40.814441','2023-10-11 15:41:34.000000','2023-10-11 15:41:34.000000');
/*!40000 ALTER TABLE `empresas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados` (
  `nome` varchar(255) NOT NULL,
  `id` char(36) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
INSERT INTO `estados` VALUES ('Estado do Rio de Janeiro','0d1e4853-eea3-4df1-8b78-45425e340321','2023-05-31 21:34:09.532980','2023-09-28 19:22:15.000000',NULL),('Espírito Santo','144d78d8-844e-4602-8430-a971325519cf','2023-09-28 17:26:12.471969','2023-09-28 17:26:12.471969',NULL),('São Paulo','3dc627cf-6e86-4e82-9ef5-8854260d381a','2023-05-31 21:34:09.532980','2023-05-31 21:36:39.831054',NULL),('Estado do Espírito Santo','ca4d7df5-5ff8-40ae-9c7f-0fc2cad187b8','2023-06-06 14:45:24.791605','2023-06-06 14:48:27.000000','2023-06-06 14:48:27.000000'),('Paraná','e0c12b5c-8718-445f-a993-2272dc79e7f7','2023-09-28 17:26:27.339426','2023-09-28 17:26:27.339426',NULL),('Espírito Santo','e538a648-5261-48bc-9cf2-503858d02151','2023-08-31 23:00:10.529095','2023-09-28 17:28:09.000000','2023-09-28 17:28:09.000000'),('Acre','f6197a89-1112-441c-b685-7a4e3ddc3d43','2023-10-10 16:28:49.245040','2023-10-10 16:28:49.245040',NULL);
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exigibilidade_iss`
--

DROP TABLE IF EXISTS `exigibilidade_iss`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exigibilidade_iss` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exigibilidade_iss`
--

LOCK TABLES `exigibilidade_iss` WRITE;
/*!40000 ALTER TABLE `exigibilidade_iss` DISABLE KEYS */;
INSERT INTO `exigibilidade_iss` VALUES ('7733c8fe-c33f-4705-b520-4fb941128cdc','teste 4','2023-09-30 17:41:36.436346','2023-09-30 17:43:11.000000','2023-09-30 17:43:11.000000'),('8ae93ac4-1bcb-4ba5-90c2-1a6e26122827','teste 2','2023-09-30 17:41:28.426679','2023-09-30 17:41:28.426679',NULL),('a205bed6-1db3-4dba-92f0-fc1a24f157ac','teste 01','2023-09-30 17:41:21.159105','2023-09-30 17:44:31.000000',NULL),('cc7b63d6-2be4-490f-9621-e7d26470b0d7','teste 3','2023-09-30 17:41:31.926761','2023-09-30 17:41:31.926761',NULL);
/*!40000 ALTER TABLE `exigibilidade_iss` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `municipios`
--

DROP TABLE IF EXISTS `municipios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `municipios` (
  `id` char(36) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  `estados_id` char(36) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipios`
--

LOCK TABLES `municipios` WRITE;
/*!40000 ALTER TABLE `municipios` DISABLE KEYS */;
INSERT INTO `municipios` VALUES ('1','teste','2023-06-07 15:45:31.168371','2023-06-07 15:45:31.168371',NULL,''),('2','Indaiatuba','2023-06-21 17:05:16.063991','2023-06-21 17:05:16.063991',NULL,''),('206520fc-8f99-4a28-8c75-47f36eb036ab','Penápolis','2023-09-28 17:52:21.184960','2023-09-28 17:52:21.184960',NULL,''),('37c4d38a-70ab-4697-adb4-ad252c26e58e','Fernandópolis','2023-09-28 17:56:06.775034','2023-09-28 18:01:10.000000','2023-09-28 18:01:10.000000',''),('71853aa4-f7a5-4c63-81b8-df726e261dd6','Vitória','2023-09-28 17:58:02.738628','2023-09-28 17:58:02.738628',NULL,''),('76376c37-022b-4f90-afc4-a78629bc5134','São José do Rio Preto','2023-09-28 17:52:35.086658','2023-09-29 21:11:24.000000',NULL,'3dc627cf-6e86-4e82-9ef5-8854260d381a'),('8ec923d3-8975-4f2d-9852-81d32bdc10f1','Campos dos Goytacazes','2023-09-28 17:56:56.348805','2023-09-28 17:56:56.348805',NULL,''),('95a96470-d7dc-460a-be8f-7a860a29f906','Salto','2023-09-29 16:36:16.100151','2023-09-29 16:36:16.100151',NULL,'3dc627cf-6e86-4e82-9ef5-8854260d381a'),('9dada9f5-3213-4c55-93aa-234d83054316','Curitiba','2023-09-29 16:34:19.838490','2023-09-29 16:34:19.838490',NULL,'e0c12b5c-8718-445f-a993-2272dc79e7f7'),('a5d977b2-6c08-4b4c-bed1-1e0e92844fd4','Curitiba','2023-09-29 16:34:51.082175','2023-09-29 16:34:51.082175',NULL,'e0c12b5c-8718-445f-a993-2272dc79e7f7'),('ba472200-8748-4465-83cd-d33ee86dc2c8','São Paulo','2023-09-28 17:47:34.655247','2023-09-28 17:47:34.655247',NULL,'');
/*!40000 ALTER TABLE `municipios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notas_fiscais`
--

DROP TABLE IF EXISTS `notas_fiscais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notas_fiscais` (
  `id` char(36) NOT NULL,
  `intermediario_servico_cpf_cnpj` varchar(255) NOT NULL,
  `intermediario_servico_ccm` varchar(255) NOT NULL,
  `intermediario_servico_razao_social` varchar(255) NOT NULL,
  `prestacao_servico_numero_processo` int NOT NULL,
  `prestacao_servico_optante_simples_nacional` enum('SIM','NÃO') NOT NULL,
  `prestacao_servico_regime_especial_tributacao` enum('SIM','NÃO') NOT NULL,
  `prestacao_servico_iss_retido` enum('SIM','NÃO') NOT NULL,
  `prestacao_servico_valor_servico` int NOT NULL,
  `prestacao_servico_aliquota` int NOT NULL,
  `prestacao_servico_valor_iss` int NOT NULL,
  `prestacao_servico_valor_deducoes` int NOT NULL,
  `prestacao_servico_incentivo_fiscal` enum('SIM','NÃO') NOT NULL,
  `descricao_servico_discriminacao_servicos` varchar(255) NOT NULL,
  `descricao_servico_observacoes` varchar(255) NOT NULL,
  `valores_retencoes_inss` int NOT NULL,
  `valores_retencoes_ir` int NOT NULL,
  `valores_retencoes_csll` int NOT NULL,
  `valores_retencoes_cofins` int NOT NULL,
  `valores_retencoes_pis` int NOT NULL,
  `valores_retencoes_outras_retencoes` int NOT NULL,
  `detalhamento_especifico_construcao_civil_numero_matricula_cei` int NOT NULL,
  `detalhamento_especifico_construcao_civil_numero_art` int NOT NULL,
  `empresa_id_tomador` char(36) NOT NULL,
  `intermediario_servico_tipo_pessoa_id` char(36) NOT NULL,
  `intermediario_servico_estados_id` char(36) NOT NULL,
  `intermediario_servico_municipios_id` char(36) NOT NULL,
  `local_realizacao_servicos_pais_id` char(36) NOT NULL,
  `local_realizacao_servicos_estado_id` char(36) NOT NULL,
  `local_realizacao_servicos_municipio_id` char(36) NOT NULL,
  `empresa_id_prestador` char(36) NOT NULL,
  `prestacao_servico_exigibilidade_iss_id` char(36) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notas_fiscais`
--

LOCK TABLES `notas_fiscais` WRITE;
/*!40000 ALTER TABLE `notas_fiscais` DISABLE KEYS */;
INSERT INTO `notas_fiscais` VALUES ('06f08ea3-1d7c-4486-950a-69c67049ed07','123456','teste','teste',982,'SIM','SIM','SIM',6475,1234,1234,123,'SIM','teste','teste',123,123,123,123,123,123,123,123,'98994ea6-67a4-11ee-8c99-0242ac120002','98994ea6-67a4-11ee-8c99-0242ac120002','3dc627cf-6e86-4e82-9ef5-8854260d381a','ba472200-8748-4465-83cd-d33ee86dc2c8','d07abd0a-b4b9-4b7b-b8f3-5ba9c78f5fba','3dc627cf-6e86-4e82-9ef5-8854260d381a','ba472200-8748-4465-83cd-d33ee86dc2c8','98994ea6-67a4-11ee-8c99-0242ac120002','a205bed6-1db3-4dba-92f0-fc1a24f157ac','2023-10-11 16:14:35.520170','2023-10-11 16:14:35.520170',NULL),('3b7a3f52-e869-4726-ba24-4d4fb94accc6','123456','teste','teste',9852,'SIM','SIM','SIM',6475,1234,1234,123,'SIM','teste','teste',123,123,123,123,123,123,123,123,'98994ea6-67a4-11ee-8c99-0242ac120002','98994ea6-67a4-11ee-8c99-0242ac120002','3dc627cf-6e86-4e82-9ef5-8854260d381a','ba472200-8748-4465-83cd-d33ee86dc2c8','d07abd0a-b4b9-4b7b-b8f3-5ba9c78f5fba','3dc627cf-6e86-4e82-9ef5-8854260d381a','ba472200-8748-4465-83cd-d33ee86dc2c8','98994ea6-67a4-11ee-8c99-0242ac120002','a205bed6-1db3-4dba-92f0-fc1a24f157ac','2023-10-11 16:14:16.289277','2023-10-11 16:19:45.000000',NULL),('c44d9e33-4c80-4f9c-9a63-4fe9edf4cb7c','123456','teste','teste',982,'SIM','SIM','SIM',6475,1234,1234,123,'SIM','teste','teste',123,123,123,123,123,123,123,123,'98994ea6-67a4-11ee-8c99-0242ac120002','98994ea6-67a4-11ee-8c99-0242ac120002','3dc627cf-6e86-4e82-9ef5-8854260d381a','ba472200-8748-4465-83cd-d33ee86dc2c8','d07abd0a-b4b9-4b7b-b8f3-5ba9c78f5fba','3dc627cf-6e86-4e82-9ef5-8854260d381a','ba472200-8748-4465-83cd-d33ee86dc2c8','98994ea6-67a4-11ee-8c99-0242ac120002','a205bed6-1db3-4dba-92f0-fc1a24f157ac','2023-10-11 16:14:40.132813','2023-10-11 16:14:40.132813',NULL),('ef921b92-4e98-4360-ad6c-27f0dba02dd0','123456','teste','teste',982,'SIM','SIM','SIM',6475,1234,1234,123,'SIM','teste','teste',123,123,123,123,123,123,123,123,'98994ea6-67a4-11ee-8c99-0242ac120002','98994ea6-67a4-11ee-8c99-0242ac120002','3dc627cf-6e86-4e82-9ef5-8854260d381a','ba472200-8748-4465-83cd-d33ee86dc2c8','d07abd0a-b4b9-4b7b-b8f3-5ba9c78f5fba','3dc627cf-6e86-4e82-9ef5-8854260d381a','ba472200-8748-4465-83cd-d33ee86dc2c8','98994ea6-67a4-11ee-8c99-0242ac120002','a205bed6-1db3-4dba-92f0-fc1a24f157ac','2023-10-11 16:14:38.427274','2023-10-11 16:18:34.000000','2023-10-11 16:18:34.000000');
/*!40000 ALTER TABLE `notas_fiscais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pais`
--

DROP TABLE IF EXISTS `pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pais` (
  `id` char(36) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
INSERT INTO `pais` VALUES ('17888bc6-6d8a-4768-ba2e-b70dce177aba','Portugal','2023-06-09 22:06:13.047833','2023-06-09 22:06:13.047833',NULL),('19c1a494-ce75-47b4-b254-e8f015e3b818','Irlanda','2023-09-28 17:31:05.108923','2023-09-28 17:32:24.000000','2023-09-28 17:32:24.000000'),('7fa8cc32-ea47-4ddd-a63f-6ddef5bf099d','Estados Unidos','2023-06-06 13:57:18.729232','2023-09-28 17:42:58.000000',NULL),('9e916d1c-e33e-4895-8391-7f93b6c67eb6','Austrália','2023-06-19 17:13:43.471774','2023-06-19 17:13:43.471774',NULL),('bb4e1e0e-2c4d-4e22-a56c-0e3262f6c060','Canadá','2023-06-06 15:26:46.681144','2023-06-06 15:36:05.000000','2023-06-06 15:36:05.000000'),('d07abd0a-b4b9-4b7b-b8f3-5ba9c78f5fba','Brasil','2023-06-06 13:57:18.729232','2023-06-06 13:57:18.749560',NULL);
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_bairro`
--

DROP TABLE IF EXISTS `tipo_bairro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_bairro` (
  `id` char(36) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_bairro`
--

LOCK TABLES `tipo_bairro` WRITE;
/*!40000 ALTER TABLE `tipo_bairro` DISABLE KEYS */;
INSERT INTO `tipo_bairro` VALUES ('0783acb3-0e4b-4da4-8e05-c4d91c1e09e6','Residencial','2023-09-30 18:05:02.905558','2023-09-30 18:34:20.000000',NULL),('24512c85-e356-42cf-a619-06c6188238c2','industrial','2023-09-30 18:05:12.452533','2023-09-30 18:05:12.452533',NULL),('3f73ceff-ae1d-4c02-9788-c40f6144b862','rural','2023-09-30 18:05:25.607523','2023-09-30 18:05:25.607523',NULL),('ee340ec6-e9d2-4a49-bcfe-c581940eddbb','misto','2023-09-30 18:05:35.007824','2023-09-30 18:34:10.000000','2023-09-30 18:34:10.000000');
/*!40000 ALTER TABLE `tipo_bairro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_logradouro`
--

DROP TABLE IF EXISTS `tipo_logradouro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_logradouro` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_logradouro`
--

LOCK TABLES `tipo_logradouro` WRITE;
/*!40000 ALTER TABLE `tipo_logradouro` DISABLE KEYS */;
INSERT INTO `tipo_logradouro` VALUES ('065dd54d-a935-4ace-88b4-bb692bd6aa7d','alameda','2023-09-30 17:52:08.320860','2023-09-30 17:52:08.320860',NULL),('152ea7db-4fca-486e-8f6a-8d66c9f49271','condomínio','2023-09-30 17:51:57.948866','2023-09-30 17:51:57.948866',NULL),('c16e2b66-3e44-4a6d-a5ac-d4b3fb6c9cd1','avenida 2','2023-09-30 17:52:21.171266','2023-09-30 17:54:23.000000','2023-09-30 17:54:23.000000'),('ca429403-4263-4e8b-91a3-7fa3dbcbf89a','Avenida','2023-09-30 17:52:15.688355','2023-09-30 17:56:13.000000',NULL),('d6bb98eb-6ba9-4c9f-9c58-e86e82f83c89','teste 1','2023-08-31 23:10:22.050624','2023-08-31 23:22:28.000000',NULL);
/*!40000 ALTER TABLE `tipo_logradouro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_pessoa`
--

DROP TABLE IF EXISTS `tipo_pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_pessoa` (
  `id` char(36) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_pessoa`
--

LOCK TABLES `tipo_pessoa` WRITE;
/*!40000 ALTER TABLE `tipo_pessoa` DISABLE KEYS */;
INSERT INTO `tipo_pessoa` VALUES ('49f202c0-a104-47cc-9d1d-315f637d5666','física','2023-11-07 19:07:03.594845','2023-11-07 19:07:03.594845',NULL),('98994ea6-67a4-11ee-8c99-0242ac120002','jurídica','2023-10-10 16:39:16.510099','2023-10-10 16:39:16.510099',NULL);
/*!40000 ALTER TABLE `tipo_pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  `id` char(36) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Letícia','Chamrelli','leticia@teste.com','$2a$12$rJLkIDX9y6a6WcGV7fTHieqM17kFh3XQL5.olKT965TWnYSGLPZTK','2023-05-17 16:05:21.206274','2023-05-17 16:05:21.206274',NULL,'1'),('Bruno','Joaquim Moreira','bruno@teste.com','$2b$10$yC4kkwVL164UGfBOewv14.sNAxqTC6FJ7Upty9zITN0simwcD1lhu','2023-05-17 21:43:58.246899','2023-08-31 13:30:37.000000',NULL,'a38e3542-a35a-43c6-b62f-ff91a49c06e4'),('Sara','Bernis','sara@teste.com','$2b$10$RXAUbRqwZjB4uPzDl2tmiuC0KF3yY8PdihX1ph3of0i9.GDBFRLka','2023-05-24 13:00:04.959550','2023-06-06 14:34:54.000000','2023-06-06 14:34:54.000000','d22c56e2-c29d-4ced-8097-59c54105fcd9');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'nfs_admin_nest'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-11 22:09:04
