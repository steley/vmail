// 这个文件内容直接从您的 _h.about.tsx 迁移而来
export function About() {
  return (
    // 修复：移除 text-black 类，文本颜色将由父组件 InfoModal 控制
    <div>
      <div className="max-w-[1400px] ">
        <p className="mt-8">
          <strong>TempMail.cc </strong> is a  temporary email service.{" "}
        </p>
        <p className="mt-4">
          You can get a temporary email without revealing any personal
          information, which greatly protects your privacy.{" "}
        </p>
        <p className="mt-4">
          Misuse of the temporary email service not only violates our terms of
          service but can also impact the normal use of other users. We
          encourage each user to use our services responsibly to ensure that
          resources are allocated and used appropriately.
        </p>
      </div>
    </div>
  );
}