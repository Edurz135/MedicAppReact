--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

-- Started on 2022-07-14 12:10:06

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 21726)
-- Name: Answers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Answers" (
    id integer NOT NULL,
    content text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "doctorId" integer,
    "questionId" integer
);


--ALTER TABLE public."Answers" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 21725)
-- Name: Answers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Answers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE public."Answers_id_seq" OWNER TO postgres;

--
-- TOC entry 3388 (class 0 OID 0)
-- Dependencies: 217
-- Name: Answers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Answers_id_seq" OWNED BY public."Answers".id;


--
-- TOC entry 220 (class 1259 OID 21745)
-- Name: Comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Comments" (
    id integer NOT NULL,
    content text NOT NULL,
    score integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "patientId" integer
);


--ALTER TABLE public."Comments" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 21744)
-- Name: Comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE public."Comments_id_seq" OWNER TO postgres;

--
-- TOC entry 3389 (class 0 OID 0)
-- Dependencies: 219
-- Name: Comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Comments_id_seq" OWNED BY public."Comments".id;


--
-- TOC entry 222 (class 1259 OID 21759)
-- Name: Dates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Dates" (
    id integer NOT NULL,
    "startDate" character varying(255) NOT NULL,
    "endDate" character varying(255),
    diagnostic text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "patientId" integer,
    "doctorId" integer
);


--ALTER TABLE public."Dates" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 21758)
-- Name: Dates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Dates_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE public."Dates_id_seq" OWNER TO postgres;

--
-- TOC entry 3390 (class 0 OID 0)
-- Dependencies: 221
-- Name: Dates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Dates_id_seq" OWNED BY public."Dates".id;


--
-- TOC entry 212 (class 1259 OID 21687)
-- Name: Doctors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Doctors" (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    age integer,
    gender character varying(255),
    "phoneNumber" character varying(255) NOT NULL,
    "attentionDays" character varying(255) NOT NULL,
    "mondayStart" character varying(255),
    "tuesdayStart" character varying(255),
    "wednesdayStart" character varying(255),
    "thursdayStart" character varying(255),
    "fridayStart" character varying(255),
    "saturdayStart" character varying(255),
    "sundayStart" character varying(255),
    "mondayEnd" character varying(255),
    "tuesdayEnd" character varying(255),
    "wednesdayEnd" character varying(255),
    "thursdayEnd" character varying(255),
    "fridayEnd" character varying(255),
    "saturdayEnd" character varying(255),
    "sundayEnd" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "specialtyId" integer
);


--ALTER TABLE public."Doctors" OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 21686)
-- Name: Doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Doctors_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE public."Doctors_id_seq" OWNER TO postgres;

--
-- TOC entry 3391 (class 0 OID 0)
-- Dependencies: 211
-- Name: Doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Doctors_id_seq" OWNED BY public."Doctors".id;


--
-- TOC entry 224 (class 1259 OID 21778)
-- Name: ExtraNotes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ExtraNotes" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    content text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "dateId" integer
);


--ALTER TABLE public."ExtraNotes" OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 21777)
-- Name: ExtraNotes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ExtraNotes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE public."ExtraNotes_id_seq" OWNER TO postgres;

--
-- TOC entry 3392 (class 0 OID 0)
-- Dependencies: 223
-- Name: ExtraNotes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ExtraNotes_id_seq" OWNED BY public."ExtraNotes".id;


--
-- TOC entry 226 (class 1259 OID 21792)
-- Name: Medicaments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Medicaments" (
    id integer NOT NULL,
    frequency character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "dateId" integer
);


--ALTER TABLE public."Medicaments" OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 21791)
-- Name: Medicaments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Medicaments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE public."Medicaments_id_seq" OWNER TO postgres;

--
-- TOC entry 3393 (class 0 OID 0)
-- Dependencies: 225
-- Name: Medicaments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Medicaments_id_seq" OWNED BY public."Medicaments".id;


--
-- TOC entry 214 (class 1259 OID 21703)
-- Name: Patients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Patients" (
    id integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255),
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    age integer,
    gender character varying(255),
    "idMedicalRecord" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--ALTER TABLE public."Patients" OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 21702)
-- Name: Patients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Patients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE public."Patients_id_seq" OWNER TO postgres;

--
-- TOC entry 3394 (class 0 OID 0)
-- Dependencies: 213
-- Name: Patients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Patients_id_seq" OWNED BY public."Patients".id;


--
-- TOC entry 216 (class 1259 OID 21714)
-- Name: Questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Questions" (
    id integer NOT NULL,
    private boolean NOT NULL,
    title character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "patientId" integer
);


--ALTER TABLE public."Questions" OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 21713)
-- Name: Questions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Questions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE public."Questions_id_seq" OWNER TO postgres;

--
-- TOC entry 3395 (class 0 OID 0)
-- Dependencies: 215
-- Name: Questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Questions_id_seq" OWNED BY public."Questions".id;


--
-- TOC entry 210 (class 1259 OID 21680)
-- Name: Specialties; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Specialties" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--ALTER TABLE public."Specialties" OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 21679)
-- Name: Specialties_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Specialties_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--ALTER TABLE public."Specialties_id_seq" OWNER TO postgres;

--
-- TOC entry 3396 (class 0 OID 0)
-- Dependencies: 209
-- Name: Specialties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Specialties_id_seq" OWNED BY public."Specialties".id;


--
-- TOC entry 3208 (class 2604 OID 21729)
-- Name: Answers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Answers" ALTER COLUMN id SET DEFAULT nextval('public."Answers_id_seq"'::regclass);


--
-- TOC entry 3209 (class 2604 OID 21748)
-- Name: Comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Comments" ALTER COLUMN id SET DEFAULT nextval('public."Comments_id_seq"'::regclass);


--
-- TOC entry 3210 (class 2604 OID 21762)
-- Name: Dates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Dates" ALTER COLUMN id SET DEFAULT nextval('public."Dates_id_seq"'::regclass);


--
-- TOC entry 3205 (class 2604 OID 21690)
-- Name: Doctors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Doctors" ALTER COLUMN id SET DEFAULT nextval('public."Doctors_id_seq"'::regclass);


--
-- TOC entry 3211 (class 2604 OID 21781)
-- Name: ExtraNotes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ExtraNotes" ALTER COLUMN id SET DEFAULT nextval('public."ExtraNotes_id_seq"'::regclass);


--
-- TOC entry 3212 (class 2604 OID 21795)
-- Name: Medicaments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Medicaments" ALTER COLUMN id SET DEFAULT nextval('public."Medicaments_id_seq"'::regclass);


--
-- TOC entry 3206 (class 2604 OID 21706)
-- Name: Patients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Patients" ALTER COLUMN id SET DEFAULT nextval('public."Patients_id_seq"'::regclass);


--
-- TOC entry 3207 (class 2604 OID 21717)
-- Name: Questions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Questions" ALTER COLUMN id SET DEFAULT nextval('public."Questions_id_seq"'::regclass);


--
-- TOC entry 3204 (class 2604 OID 21683)
-- Name: Specialties id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Specialties" ALTER COLUMN id SET DEFAULT nextval('public."Specialties_id_seq"'::regclass);


--
-- TOC entry 3226 (class 2606 OID 21733)
-- Name: Answers Answers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Answers"
    ADD CONSTRAINT "Answers_pkey" PRIMARY KEY (id);


--
-- TOC entry 3228 (class 2606 OID 21752)
-- Name: Comments Comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_pkey" PRIMARY KEY (id);


--
-- TOC entry 3230 (class 2606 OID 21766)
-- Name: Dates Dates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Dates"
    ADD CONSTRAINT "Dates_pkey" PRIMARY KEY (id);


--
-- TOC entry 3216 (class 2606 OID 21696)
-- Name: Doctors Doctors_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Doctors"
    ADD CONSTRAINT "Doctors_email_key" UNIQUE (email);


--
-- TOC entry 3218 (class 2606 OID 21694)
-- Name: Doctors Doctors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Doctors"
    ADD CONSTRAINT "Doctors_pkey" PRIMARY KEY (id);


--
-- TOC entry 3232 (class 2606 OID 21785)
-- Name: ExtraNotes ExtraNotes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ExtraNotes"
    ADD CONSTRAINT "ExtraNotes_pkey" PRIMARY KEY (id);


--
-- TOC entry 3234 (class 2606 OID 21799)
-- Name: Medicaments Medicaments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Medicaments"
    ADD CONSTRAINT "Medicaments_pkey" PRIMARY KEY (id);


--
-- TOC entry 3220 (class 2606 OID 21712)
-- Name: Patients Patients_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Patients"
    ADD CONSTRAINT "Patients_email_key" UNIQUE (email);


--
-- TOC entry 3222 (class 2606 OID 21710)
-- Name: Patients Patients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Patients"
    ADD CONSTRAINT "Patients_pkey" PRIMARY KEY (id);


--
-- TOC entry 3224 (class 2606 OID 21719)
-- Name: Questions Questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Questions"
    ADD CONSTRAINT "Questions_pkey" PRIMARY KEY (id);


--
-- TOC entry 3214 (class 2606 OID 21685)
-- Name: Specialties Specialties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Specialties"
    ADD CONSTRAINT "Specialties_pkey" PRIMARY KEY (id);


--
-- TOC entry 3237 (class 2606 OID 21734)
-- Name: Answers Answers_doctorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Answers"
    ADD CONSTRAINT "Answers_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES public."Doctors"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3238 (class 2606 OID 21739)
-- Name: Answers Answers_questionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Answers"
    ADD CONSTRAINT "Answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES public."Questions"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3239 (class 2606 OID 21753)
-- Name: Comments Comments_patientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES public."Patients"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3241 (class 2606 OID 21772)
-- Name: Dates Dates_doctorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Dates"
    ADD CONSTRAINT "Dates_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES public."Doctors"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3240 (class 2606 OID 21767)
-- Name: Dates Dates_patientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Dates"
    ADD CONSTRAINT "Dates_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES public."Patients"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3235 (class 2606 OID 21697)
-- Name: Doctors Doctors_specialtyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Doctors"
    ADD CONSTRAINT "Doctors_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES public."Specialties"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3242 (class 2606 OID 21786)
-- Name: ExtraNotes ExtraNotes_dateId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ExtraNotes"
    ADD CONSTRAINT "ExtraNotes_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES public."Dates"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3243 (class 2606 OID 21800)
-- Name: Medicaments Medicaments_dateId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Medicaments"
    ADD CONSTRAINT "Medicaments_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES public."Dates"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3236 (class 2606 OID 21720)
-- Name: Questions Questions_patientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Questions"
    ADD CONSTRAINT "Questions_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES public."Patients"(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2022-07-14 12:10:06

--
-- PostgreSQL database dump complete
--

