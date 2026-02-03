import { P as ProviderCallConfig } from '../http-CRaj6wih.cjs';
import { z } from 'zod';

/**
 * Config de mapeo entre request/response y la API externa
 */
declare const MappingConfigSchema: z.ZodObject<{
    provider_key: z.ZodString;
    operation_key: z.ZodString;
    version: z.ZodNumber;
    is_active: z.ZodBoolean;
    request_path: z.ZodOptional<z.ZodString>;
    request_method: z.ZodOptional<z.ZodEnum<["GET", "POST", "PUT", "DELETE", "PATCH"]>>;
    request_timeout_ms: z.ZodOptional<z.ZodNumber>;
    default_headers_json: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    default_params_json: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    request_body_map: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>>>;
    request_headers_map: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>>>;
    request_params_map: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>>>;
    response_items_map: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>, z.ZodObject<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    response_raw: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    error_rules_json: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
    legacy_enabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    legacy_map_json: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodNull, z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>, z.ZodArray<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>, z.ZodObject<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">>]>, "many">]>>>;
    request_encrypt_enabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    request_encrypt_algorithms: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodEnum<["RSA", "AES"]>, "many">, z.ZodRecord<z.ZodString, z.ZodNever>, z.ZodNull]>>>, ("RSA" | "AES")[], ("RSA" | "AES")[] | Record<string, never> | null | undefined>;
    request_encrypt_keys: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodNull]>>>;
    request_encrypt_wrapper: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodNull]>>>;
    request_encrypt_config: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        aes: z.ZodOptional<z.ZodObject<{
            mode: z.ZodDefault<z.ZodOptional<z.ZodEnum<["GCM", "CBC", "CTR", "CFB"]>>>;
            keySize: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
            ivSize: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            mode: "GCM" | "CBC" | "CTR" | "CFB";
            keySize: number;
            ivSize: number;
        }, {
            mode?: "GCM" | "CBC" | "CTR" | "CFB" | undefined;
            keySize?: number | undefined;
            ivSize?: number | undefined;
        }>>;
        rsa: z.ZodOptional<z.ZodObject<{
            padding: z.ZodDefault<z.ZodOptional<z.ZodEnum<["OAEP", "PKCS1"]>>>;
            oaepHash: z.ZodDefault<z.ZodOptional<z.ZodEnum<["sha256", "sha384", "sha512", "sha1"]>>>;
        }, "strip", z.ZodTypeAny, {
            padding: "OAEP" | "PKCS1";
            oaepHash: "sha256" | "sha384" | "sha512" | "sha1";
        }, {
            padding?: "OAEP" | "PKCS1" | undefined;
            oaepHash?: "sha256" | "sha384" | "sha512" | "sha1" | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        aes?: {
            mode: "GCM" | "CBC" | "CTR" | "CFB";
            keySize: number;
            ivSize: number;
        } | undefined;
        rsa?: {
            padding: "OAEP" | "PKCS1";
            oaepHash: "sha256" | "sha384" | "sha512" | "sha1";
        } | undefined;
    }, {
        aes?: {
            mode?: "GCM" | "CBC" | "CTR" | "CFB" | undefined;
            keySize?: number | undefined;
            ivSize?: number | undefined;
        } | undefined;
        rsa?: {
            padding?: "OAEP" | "PKCS1" | undefined;
            oaepHash?: "sha256" | "sha384" | "sha512" | "sha1" | undefined;
        } | undefined;
    }>, z.ZodRecord<z.ZodString, z.ZodNever>, z.ZodNull]>>>, Record<string, never> | {
        aes?: {
            mode: "GCM" | "CBC" | "CTR" | "CFB";
            keySize: number;
            ivSize: number;
        } | undefined;
        rsa?: {
            padding: "OAEP" | "PKCS1";
            oaepHash: "sha256" | "sha384" | "sha512" | "sha1";
        } | undefined;
    }, Record<string, never> | {
        aes?: {
            mode?: "GCM" | "CBC" | "CTR" | "CFB" | undefined;
            keySize?: number | undefined;
            ivSize?: number | undefined;
        } | undefined;
        rsa?: {
            padding?: "OAEP" | "PKCS1" | undefined;
            oaepHash?: "sha256" | "sha384" | "sha512" | "sha1" | undefined;
        } | undefined;
    } | null | undefined>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    provider_key: z.ZodString;
    operation_key: z.ZodString;
    version: z.ZodNumber;
    is_active: z.ZodBoolean;
    request_path: z.ZodOptional<z.ZodString>;
    request_method: z.ZodOptional<z.ZodEnum<["GET", "POST", "PUT", "DELETE", "PATCH"]>>;
    request_timeout_ms: z.ZodOptional<z.ZodNumber>;
    default_headers_json: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    default_params_json: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    request_body_map: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>>>;
    request_headers_map: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>>>;
    request_params_map: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>>>;
    response_items_map: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>, z.ZodObject<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    response_raw: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    error_rules_json: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
    legacy_enabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    legacy_map_json: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodNull, z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>, z.ZodArray<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>, z.ZodObject<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">>]>, "many">]>>>;
    request_encrypt_enabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    request_encrypt_algorithms: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodEnum<["RSA", "AES"]>, "many">, z.ZodRecord<z.ZodString, z.ZodNever>, z.ZodNull]>>>, ("RSA" | "AES")[], ("RSA" | "AES")[] | Record<string, never> | null | undefined>;
    request_encrypt_keys: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodNull]>>>;
    request_encrypt_wrapper: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodNull]>>>;
    request_encrypt_config: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        aes: z.ZodOptional<z.ZodObject<{
            mode: z.ZodDefault<z.ZodOptional<z.ZodEnum<["GCM", "CBC", "CTR", "CFB"]>>>;
            keySize: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
            ivSize: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            mode: "GCM" | "CBC" | "CTR" | "CFB";
            keySize: number;
            ivSize: number;
        }, {
            mode?: "GCM" | "CBC" | "CTR" | "CFB" | undefined;
            keySize?: number | undefined;
            ivSize?: number | undefined;
        }>>;
        rsa: z.ZodOptional<z.ZodObject<{
            padding: z.ZodDefault<z.ZodOptional<z.ZodEnum<["OAEP", "PKCS1"]>>>;
            oaepHash: z.ZodDefault<z.ZodOptional<z.ZodEnum<["sha256", "sha384", "sha512", "sha1"]>>>;
        }, "strip", z.ZodTypeAny, {
            padding: "OAEP" | "PKCS1";
            oaepHash: "sha256" | "sha384" | "sha512" | "sha1";
        }, {
            padding?: "OAEP" | "PKCS1" | undefined;
            oaepHash?: "sha256" | "sha384" | "sha512" | "sha1" | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        aes?: {
            mode: "GCM" | "CBC" | "CTR" | "CFB";
            keySize: number;
            ivSize: number;
        } | undefined;
        rsa?: {
            padding: "OAEP" | "PKCS1";
            oaepHash: "sha256" | "sha384" | "sha512" | "sha1";
        } | undefined;
    }, {
        aes?: {
            mode?: "GCM" | "CBC" | "CTR" | "CFB" | undefined;
            keySize?: number | undefined;
            ivSize?: number | undefined;
        } | undefined;
        rsa?: {
            padding?: "OAEP" | "PKCS1" | undefined;
            oaepHash?: "sha256" | "sha384" | "sha512" | "sha1" | undefined;
        } | undefined;
    }>, z.ZodRecord<z.ZodString, z.ZodNever>, z.ZodNull]>>>, Record<string, never> | {
        aes?: {
            mode: "GCM" | "CBC" | "CTR" | "CFB";
            keySize: number;
            ivSize: number;
        } | undefined;
        rsa?: {
            padding: "OAEP" | "PKCS1";
            oaepHash: "sha256" | "sha384" | "sha512" | "sha1";
        } | undefined;
    }, Record<string, never> | {
        aes?: {
            mode?: "GCM" | "CBC" | "CTR" | "CFB" | undefined;
            keySize?: number | undefined;
            ivSize?: number | undefined;
        } | undefined;
        rsa?: {
            padding?: "OAEP" | "PKCS1" | undefined;
            oaepHash?: "sha256" | "sha384" | "sha512" | "sha1" | undefined;
        } | undefined;
    } | null | undefined>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    provider_key: z.ZodString;
    operation_key: z.ZodString;
    version: z.ZodNumber;
    is_active: z.ZodBoolean;
    request_path: z.ZodOptional<z.ZodString>;
    request_method: z.ZodOptional<z.ZodEnum<["GET", "POST", "PUT", "DELETE", "PATCH"]>>;
    request_timeout_ms: z.ZodOptional<z.ZodNumber>;
    default_headers_json: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    default_params_json: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
    request_body_map: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>>>;
    request_headers_map: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>>>;
    request_params_map: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>>>;
    response_items_map: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>, z.ZodObject<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">>]>, "many">>;
    response_raw: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    error_rules_json: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
    legacy_enabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    legacy_map_json: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodNull, z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>, z.ZodArray<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        const: z.ZodAny;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        const: z.ZodAny;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        template: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        template: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        coalesce: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodAny>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
        default: z.ZodOptional<z.ZodBoolean>;
        optional: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pick: z.ZodArray<z.ZodString, "many">;
        mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toNumber: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toBoolean: z.ZodObject<{
            from: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toDateMs: z.ZodObject<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
            default: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        join: z.ZodObject<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            of: z.ZodArray<z.ZodString, "many">;
            sep: z.ZodDefault<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mapValue: z.ZodObject<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            dict: z.ZodRecord<z.ZodString, z.ZodAny>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        stripPrefix: z.ZodObject<{
            from: z.ZodString;
            prefix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            prefix: string;
        }, {
            from: string;
            prefix: string;
        }>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
            offsetMs: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            offsetMs: number;
        }, {
            offsetMs: number;
        }>]>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        toString: z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        parseXml: z.ZodObject<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
            nodePattern: z.ZodOptional<z.ZodString>;
            itemPrefix: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>;
    }, z.ZodTypeAny, "passthrough">>]>>, z.ZodObject<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        each: z.ZodString;
        map: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            const: z.ZodAny;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            const: z.ZodAny;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            template: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            template: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            coalesce: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodAny>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pickAnyBoolean: z.ZodArray<z.ZodString, "many">;
            default: z.ZodOptional<z.ZodBoolean>;
            optional: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pick: z.ZodArray<z.ZodString, "many">;
            mapKeys: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            append: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toNumber: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toBoolean: z.ZodObject<{
                from: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toDateMs: z.ZodObject<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                format: z.ZodOptional<z.ZodEnum<["iso", "epochMs", "epochSec"]>>;
                default: z.ZodOptional<z.ZodNumber>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            join: z.ZodObject<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                of: z.ZodArray<z.ZodString, "many">;
                sep: z.ZodDefault<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mapValue: z.ZodObject<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                dict: z.ZodRecord<z.ZodString, z.ZodAny>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            stripPrefix: z.ZodObject<{
                from: z.ZodString;
                prefix: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                prefix: string;
            }, {
                from: string;
                prefix: string;
            }>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            nowMs: z.ZodUnion<[z.ZodLiteral<true>, z.ZodObject<{
                offsetMs: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offsetMs: number;
            }, {
                offsetMs: number;
            }>]>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            toString: z.ZodObject<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                default: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            parseXml: z.ZodObject<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                from: z.ZodString;
                mode: z.ZodDefault<z.ZodEnum<["array", "object"]>>;
                nodePattern: z.ZodOptional<z.ZodString>;
                itemPrefix: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodAny>;
            }, z.ZodTypeAny, "passthrough">>;
        }, z.ZodTypeAny, "passthrough">>]>>;
    }, z.ZodTypeAny, "passthrough">>]>, "many">]>>>;
    request_encrypt_enabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    request_encrypt_algorithms: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodEnum<["RSA", "AES"]>, "many">, z.ZodRecord<z.ZodString, z.ZodNever>, z.ZodNull]>>>, ("RSA" | "AES")[], ("RSA" | "AES")[] | Record<string, never> | null | undefined>;
    request_encrypt_keys: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodNull]>>>;
    request_encrypt_wrapper: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodNull]>>>;
    request_encrypt_config: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        aes: z.ZodOptional<z.ZodObject<{
            mode: z.ZodDefault<z.ZodOptional<z.ZodEnum<["GCM", "CBC", "CTR", "CFB"]>>>;
            keySize: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
            ivSize: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            mode: "GCM" | "CBC" | "CTR" | "CFB";
            keySize: number;
            ivSize: number;
        }, {
            mode?: "GCM" | "CBC" | "CTR" | "CFB" | undefined;
            keySize?: number | undefined;
            ivSize?: number | undefined;
        }>>;
        rsa: z.ZodOptional<z.ZodObject<{
            padding: z.ZodDefault<z.ZodOptional<z.ZodEnum<["OAEP", "PKCS1"]>>>;
            oaepHash: z.ZodDefault<z.ZodOptional<z.ZodEnum<["sha256", "sha384", "sha512", "sha1"]>>>;
        }, "strip", z.ZodTypeAny, {
            padding: "OAEP" | "PKCS1";
            oaepHash: "sha256" | "sha384" | "sha512" | "sha1";
        }, {
            padding?: "OAEP" | "PKCS1" | undefined;
            oaepHash?: "sha256" | "sha384" | "sha512" | "sha1" | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        aes?: {
            mode: "GCM" | "CBC" | "CTR" | "CFB";
            keySize: number;
            ivSize: number;
        } | undefined;
        rsa?: {
            padding: "OAEP" | "PKCS1";
            oaepHash: "sha256" | "sha384" | "sha512" | "sha1";
        } | undefined;
    }, {
        aes?: {
            mode?: "GCM" | "CBC" | "CTR" | "CFB" | undefined;
            keySize?: number | undefined;
            ivSize?: number | undefined;
        } | undefined;
        rsa?: {
            padding?: "OAEP" | "PKCS1" | undefined;
            oaepHash?: "sha256" | "sha384" | "sha512" | "sha1" | undefined;
        } | undefined;
    }>, z.ZodRecord<z.ZodString, z.ZodNever>, z.ZodNull]>>>, Record<string, never> | {
        aes?: {
            mode: "GCM" | "CBC" | "CTR" | "CFB";
            keySize: number;
            ivSize: number;
        } | undefined;
        rsa?: {
            padding: "OAEP" | "PKCS1";
            oaepHash: "sha256" | "sha384" | "sha512" | "sha1";
        } | undefined;
    }, Record<string, never> | {
        aes?: {
            mode?: "GCM" | "CBC" | "CTR" | "CFB" | undefined;
            keySize?: number | undefined;
            ivSize?: number | undefined;
        } | undefined;
        rsa?: {
            padding?: "OAEP" | "PKCS1" | undefined;
            oaepHash?: "sha256" | "sha384" | "sha512" | "sha1" | undefined;
        } | undefined;
    } | null | undefined>;
}, z.ZodTypeAny, "passthrough">>;
type MappingConfig = z.infer<typeof MappingConfigSchema>;

interface MappingConfigRepo {
    getActive(provider: string, operation: string, tenant?: string, environment?: string): Promise<MappingConfig | null>;
}

interface KVCache {
    get<T>(key: string): Promise<T | null>;
    set<T>(key: string, val: T, ttlSec: number): Promise<void>;
    del(key: string): Promise<void>;
}

declare class BaseDynamicAdapter<TItem> {
    private readonly repo;
    private readonly cache;
    private readonly providerKey;
    private readonly operationKey;
    private readonly cacheTTL;
    constructor(repo: MappingConfigRepo, cache: KVCache, providerKey: string, operationKey: string, cacheTTL?: number);
    private cacheKey;
    run(stdInput: any, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<{
        items: TItem[];
        status: number;
        provider: string;
        aditionalData: Record<string, any> | undefined;
        raw: {
            bodyReceived: any;
            headersRequest: any;
            paramsRequest: any;
            bodyRequestRaw?: any;
            headersCore: Record<string, any>;
            dataCore: any;
            timeResponseCoreMs: number;
            urlRequest: string;
            bodyRequest: any;
        } | undefined;
    }>;
}

interface HttpExecutionResult {
    url?: string;
    method: string;
    params?: Record<string, any>;
    status: number;
    headers: Record<string, any>;
    data: any;
    timeResponseMs: number;
}
declare function executeHttp(cfg: ProviderCallConfig): Promise<HttpExecutionResult>;

export { BaseDynamicAdapter, type HttpExecutionResult, executeHttp };
